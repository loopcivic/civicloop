// import { BadRequestException, Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { Status } from '@prisma/client';

// @Injectable()
// export class OfficerService {
//   constructor(private prisma: PrismaService) {}

//   async queue(userId: string) {
//     const officer = await this.prisma.officer.findUnique({
//       where: { userId },
//       include: { ward: true, department: true },
//     });
//     if (!officer) throw new BadRequestException('Not an officer');

//     return this.prisma.complaint.findMany({
//       where: {
//         wardId: officer.wardId,
//         departmentId: officer.departmentId,
//         assignedOfficerId: officer.id,
//         currentStatus: { in: [Status.CREATED, Status.ACKNOWLEDGED, Status.ASSIGNED, Status.INSPECTION, Status.WORK_IN_PROGRESS, Status.REOPENED] },
//       },
//       orderBy: [{ createdAt: 'desc' }],
//       select: {
//         id: true,
//         title: true,
//         category: true,
//         currentStatus: true,
//         createdAt: true,
//         lat: true,
//         lng: true,
//       },
//     });
//   }
// }

import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Status, Role } from '@prisma/client';

@Injectable()
export class OfficerService {
  constructor(private prisma: PrismaService) {}

  // 🔹 Officer profile
  async getOfficerProfile(userId: string) {
    const officer = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        ward: true,
        department: true,
      },
    });

    if (!officer || officer.role !== Role.OFFICER) {
      throw new BadRequestException('Not an officer');
    }

    return {
      id: officer.id,
      name: officer.name,
      email: officer.email,
      ward: officer.ward?.name,
      department: officer.department?.name,
      role: officer.role,
    };
  }

  // 🔹 Officer complaint queue
  async queue(userId: string) {
    const officer = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        ward: true,
        department: true,
      },
    });

    if (!officer || officer.role !== Role.OFFICER) {
      throw new BadRequestException('Not an officer');
    }

    return this.prisma.complaint.findMany({
      where: {
        wardId: officer.wardId!,
        departmentId: officer.departmentId!,
        assignedOfficerId: officer.id,
        currentStatus: {
          in: [
            Status.CREATED,
            Status.ACKNOWLEDGED,
            Status.ASSIGNED,
            Status.INSPECTION,
            Status.WORK_IN_PROGRESS,
            Status.REOPENED,
          ],
        },
      },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        category: true,
        currentStatus: true,
        createdAt: true,
        lat: true,
        lng: true,
      },
    });
  }
}
