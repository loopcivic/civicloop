import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { QueuesService } from '../queues/queues.service';
import { appendEvent } from '../complaints/event-append';
import { EventType, Role, Status } from '@prisma/client';

@Injectable()
export class SlaService implements OnModuleInit {
  private worker: any;

  constructor(
    private prisma: PrismaService,
    private queues: QueuesService,
  ) {}

  onModuleInit() {
    // start worker that processes SLA jobs
    this.worker = this.queues.createWorker(async (name, data) => {
      if (name === 'ACK_DUE') await this.handleAckDue(data.complaintId);
      if (name === 'RESOLVE_DUE') await this.handleResolveDue(data.complaintId);
    });
  }

  // called when a complaint is created
  async scheduleForComplaint(complaintId: string) {
    const complaint = await this.prisma.complaint.findUnique({
      where: { id: complaintId },
      include: { department: true },
    });
    if (!complaint) return;

    const sla = await this.prisma.sLA.findFirst({
      where: { category: complaint.category, departmentId: complaint.departmentId },
    }).catch(() => null);

    // Fallback SLAs if not configured
    const ackHours = (sla?.ackHours ?? 24);
    const resolveHours = (sla?.resolveHours ?? 72);

    await this.queues.schedule({ name: 'ACK_DUE', data: { complaintId } }, ackHours * 3600_000);
    await this.queues.schedule({ name: 'RESOLVE_DUE', data: { complaintId } }, resolveHours * 3600_000);
  }

  private async handleAckDue(complaintId: string) {
    const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
    if (!complaint) return;

    // if still not acknowledged -> escalate
    if (complaint.currentStatus === Status.CREATED) {
      await appendEvent({
        prisma: this.prisma,
        complaintId,
        type: EventType.ESCALATED,
        actorRole: Role.ADMIN,
        data: { reason: 'ACK overdue', at: new Date().toISOString() },
      });

      // Keep status CREATED (truth: still not acknowledged), but the ESCALATED event is public/auditable.
    }
  }

  private async handleResolveDue(complaintId: string) {
    const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
    if (!complaint) return;

    // if not resolved/verified -> escalate
    // const done = [Status.RESOLVED, Status.VERIFIED].includes(complaint.currentStatus);
    const done = ([Status.RESOLVED, Status.VERIFIED] as Status[]).includes(complaint.currentStatus);
    if (!done) {
      await appendEvent({
        prisma: this.prisma,
        complaintId,
        type: EventType.ESCALATED,
        actorRole: Role.ADMIN,
        data: { reason: 'RESOLVE overdue', at: new Date().toISOString() },
      });
    }
  }
}
