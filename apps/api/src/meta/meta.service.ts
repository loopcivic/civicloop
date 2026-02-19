import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MetaService {
  constructor(private prisma: PrismaService) {}

  wards(cityCode: string) {
    return this.prisma.ward.findMany({
      where: { cityCode },
      orderBy: { name: 'asc' },
      select: { id: true, name: true },
    });
  }

  departments() {
    return this.prisma.department.findMany({
      orderBy: { name: 'asc' },
      select: { id: true, code: true, name: true },
    });
  }
}
