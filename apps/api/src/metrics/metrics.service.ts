import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { EntityType, Status } from '@prisma/client';

function pctl(values: number[], p: number) {
  if (values.length === 0) return 0;
  const s = [...values].sort((a,b)=>a-b);
  const idx = Math.floor((p/100) * (s.length - 1));
  return s[idx];
}

@Injectable()
export class MetricsService {
  constructor(private prisma: PrismaService) {}

  // Run every day 02:10 (pilot). In prod: monthly.
  @Cron('10 2 * * *')
  async snapshot() {
    const city = process.env.CITY_CODE ?? 'pilot-city';
    const now = new Date();
    const periodMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));

    // Only compute for this month-to-date (pilot). Later: previous month full.
    const since = periodMonth;

    const wards = await this.prisma.ward.findMany({ where: { cityCode: city }, select: { id: true } });

    for (const w of wards) {
      const complaints = await this.prisma.complaint.findMany({
        where: { wardId: w.id, createdAt: { gte: since }, duplicateOfId: null },
        select: { id: true, currentStatus: true },
      });

      const ids = complaints.map(c => c.id);
      if (ids.length === 0) continue;

      const events = await this.prisma.complaintEvent.findMany({
        where: { complaintId: { in: ids } },
        orderBy: { createdAt: 'asc' },
        select: { complaintId: true, type: true, createdAt: true },
      });

      const byId = new Map<string, any[]>();
      for (const e of events) {
        const arr = byId.get(e.complaintId) ?? [];
        arr.push(e);
        byId.set(e.complaintId, arr);
      }

      const ackMins: number[] = [];
      const resMins: number[] = [];
      let resolvedCount = 0;
      let slaBreaches = 0;
      const total = ids.length;

      for (const id of ids) {
        const ev = byId.get(id) ?? [];
        const created = ev.find(x => x.type === 'CREATED')?.createdAt?.getTime();
        const ack = ev.find(x => x.type === 'ACKNOWLEDGED')?.createdAt?.getTime();
        const res = ev.find(x => x.type === 'RESOLVED' || x.type === 'VERIFIED')?.createdAt?.getTime();
        const escalated = ev.find(x => x.type === 'ESCALATED');

        if (created && ack) ackMins.push(Math.max(0, Math.round((ack-created)/60000)));
        if (created && res) resMins.push(Math.max(0, Math.round((res-created)/60000)));
        if (res) resolvedCount += 1;
        if (escalated) slaBreaches += 1;
      }

      const snap = {
        entityType: EntityType.WARD,
        entityId: w.id,
        periodMonth,
        totalIssues: total,
        ackP50Min: pctl(ackMins, 50),
        ackP95Min: pctl(ackMins, 95),
        resolveP50Min: pctl(resMins, 50),
        resolveP95Min: pctl(resMins, 95),
        resolutionRate: total ? Math.round((resolvedCount/total)*100) : 0,
        slaBreachRate: total ? Math.round((slaBreaches/total)*100) : 0,
      };

      await this.prisma.performanceSnapshot.upsert({
        where: { entityType_entityId_periodMonth: { entityType: snap.entityType, entityId: snap.entityId, periodMonth: snap.periodMonth } },
        update: snap, // ok for pilot; if you want strict immutability: create new + keep version.
        create: snap,
      });
    }

    console.log('✅ Metrics snapshot updated for', periodMonth.toISOString());
  }
}
