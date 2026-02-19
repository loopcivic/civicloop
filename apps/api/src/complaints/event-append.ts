import { PrismaService } from '../prisma/prisma.service';
import { computeEventHash } from '../common/hash';
import { EventType, Role } from '@prisma/client';

export async function appendEvent(params: {
  prisma: PrismaService;
  complaintId: string;
  type: EventType;
  actorUserId?: string | null;
  actorRole?: Role | null;
  data: any;
}) {
  const last = await params.prisma.complaintEvent.findFirst({
    where: { complaintId: params.complaintId },
    orderBy: { createdAt: 'desc' },
  });

  const createdAtISO = new Date().toISOString();
  const hash = computeEventHash({
    complaintId: params.complaintId,
    type: params.type,
    createdAtISO,
    data: params.data,
    prevHash: last?.hash ?? null,
  });

  return params.prisma.complaintEvent.create({
    data: {
      complaintId: params.complaintId,
      type: params.type,
      actorUserId: params.actorUserId ?? null,
      actorRole: params.actorRole ?? null,
      data: params.data,
      createdAt: new Date(createdAtISO),
      prevHash: last?.hash ?? null,
      hash,
    },
  });
}
