import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Status} from '@prisma/client';

import { clusterPoints } from './map.util';


@Injectable()
export class PublicService {
  constructor(private prisma: PrismaService) { }
  async leaderboard(cityCode: string) {
    const wards = await this.prisma.ward.findMany({
      where: { cityCode },
    });

    // FIX: Define the array type explicitly as 'any[]'
    const results: any[] = [];

    for (const w of wards) {
      const total = await this.prisma.complaint.count({ where: { wardId: w.id } });

      const resolved = await this.prisma.complaint.count({
        where: {
          wardId: w.id,
          currentStatus: { in: [Status.RESOLVED, Status.VERIFIED] }
        },
      });

      const reopened = await this.prisma.complaint.count({
        where: { wardId: w.id, currentStatus: Status.REOPENED },
      });

      // Avoid division by zero
      const rate = total === 0 ? 0 : (resolved / total) * 100;

      results.push({
        wardId: w.id,
        wardName: w.name,
        total,
        resolved,
        reopened,
        resolutionRate: parseFloat(rate.toFixed(1)),
      });
    }

    return results.sort((a, b) => b.resolutionRate - a.resolutionRate);
  }
  // async leaderboard(cityCode: string) {
  //   // For pilot: compute simple metrics per ward
  //   const wards = await this.prisma.ward.findMany({ where: { cityCode } });

  //   const results = [];
  //   for (const w of wards) {
  //     const total = await this.prisma.complaint.count({ where: { wardId: w.id } });
  //     const resolved = await this.prisma.complaint.count({
  //       where: { wardId: w.id, currentStatus: { in: [Status.RESOLVED, Status.VERIFIED] } },
  //     });
  //     const reopened = await this.prisma.complaint.count({ where: { wardId: w.id, currentStatus: Status.REOPENED } });

  //     results.push({
  //       wardId: w.id,
  //       wardName: w.name,
  //       total,
  //       resolved,
  //       reopened,
  //       resolutionRate: total === 0 ? 0 : Math.round((resolved / total) * 100),
  //     });
  //   }

  //   results.sort((a, b) => b.resolutionRate - a.resolutionRate);
  //   return results;
  // }

  async recent(cityCode: string, limit = 20) {
    return this.prisma.complaint.findMany({
      where: { ward: { cityCode } },
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: {
        id: true,
        title: true,
        category: true,
        currentStatus: true,
        createdAt: true,
        lat: true,
        lng: true,
        ward: { select: { name: true } },
        department: { select: { name: true } },
      },
    });
  }

  async map(cityCode: string, bbox: string, zoom: number) {
    const [minLng, minLat, maxLng, maxLat] = bbox.split(',').map(Number);
    const points = await this.prisma.complaint.findMany({
      where: {
        ward: { cityCode },
        lat: { gte: minLat, lte: maxLat },
        lng: { gte: minLng, lte: maxLng },
        duplicateOfId: null, // hide duplicates; canonical only
      },
      take: 5000,
      select: { id: true, lat: true, lng: true, currentStatus: true, category: true },
    });

    return clusterPoints(points, zoom);
  }

  // async upvote(complaintId: string, userId: string) {
  //   const c = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
  //   if (!c) throw new BadRequestException('Not found');

  //   // if this is a duplicate, upvote canonical
  //   const targetId = c.duplicateOfId ?? c.id;

  //   await this.prisma.complaintSignal.upsert({
  //     where: { complaintId_userId_type: { complaintId: targetId, userId, type: 'UPVOTE' as any } },
  //     update: {},
  //     create: { complaintId: targetId, userId, type: 'UPVOTE' as any },
  //   });

  //   await appendEvent({
  //     prisma: this.prisma,
  //     complaintId: targetId,
  //     type: EventType.UPVOTED,
  //     actorUserId: userId,
  //     actorRole: Role.CITIZEN,
  //     data: { at: new Date().toISOString() },
  //   });

  //   const total = await this.prisma.complaintSignal.count({ where: { complaintId: targetId, type: 'UPVOTE' as any } });
  //   return { ok: true, upvotes: total, complaintId: targetId };
  // }

  // async linkDuplicate(dupId: string, canonicalId: string, actorUserId: string, actorRole: Role) {
  //   if (dupId === canonicalId) throw new BadRequestException('Same id');
  //   const [dup, can] = await Promise.all([
  //     this.prisma.complaint.findUnique({ where: { id: dupId } }),
  //     this.prisma.complaint.findUnique({ where: { id: canonicalId } }),
  //   ]);
  //   if (!dup || !can) throw new BadRequestException('Not found');

  //   await this.prisma.complaint.update({
  //     where: { id: dupId },
  //     data: { duplicateOfId: canonicalId },
  //   });

  //   await appendEvent({
  //     prisma: this.prisma,
  //     complaintId: dupId,
  //     type: EventType.DUPLICATE_LINKED,
  //     actorUserId,
  //     actorRole,
  //     data: { canonicalId, at: new Date().toISOString() },
  //   });

  //   return { ok: true, duplicateId: dupId, canonicalId };
  // }



}
