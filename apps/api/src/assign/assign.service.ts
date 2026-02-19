// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';

// @Injectable()
// export class AssignService {
//   constructor(private prisma: PrismaService) {}

//   async pickOfficer(wardId: string, departmentId: string) {
//     const officers = await this.prisma.officer.findMany({
//       where: { wardId, departmentId },
//       orderBy: { createdAt: 'asc' },
//       select: { id: true },
//     });
//     if (officers.length === 0) return null;

//     // very simple round-robin based on count of assigned complaints
//     const counts = await Promise.all(
//       officers.map(async (o) => ({
//         id: o.id,
//         load: await this.prisma.complaint.count({ where: { assignedOfficerId: o.id } }),
//       })),
//     );
//     counts.sort((a, b) => a.load - b.load);
//     return counts[0].id;
//   }
// }


import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client'; // Import Role enum

@Injectable()
export class AssignService {
  constructor(private prisma: PrismaService) {}

  async pickOfficer(wardId: string, departmentId: string) {
    // ✅ FIX: Query 'User' table instead of 'Officer' table
    const officers = await this.prisma.user.findMany({
      where: { 
        role: Role.OFFICER,   // Must be an Officer
        wardId,               // Match Ward
        departmentId          // Match Department
      },
      orderBy: { createdAt: 'asc' },
      select: { id: true },
    });
    
    if (officers.length === 0) return null;

    // Load Balancing: Pick officer with fewest complaints
    // This logic works perfectly because 'assignedOfficerId' now points to User ID
    const counts = await Promise.all(
      officers.map(async (o) => ({
        id: o.id,
        load: await this.prisma.complaint.count({ 
            where: { assignedOfficerId: o.id, currentStatus: { not: 'RESOLVED' } } 
        }),
      })),
    );
    
    // Sort by load (ascending) -> Pick the one with the least work
    counts.sort((a, b) => a.load - b.load);
    return counts[0].id;
  }
}