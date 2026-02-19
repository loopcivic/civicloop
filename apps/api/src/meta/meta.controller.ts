// import { Controller, Get, Post, Body } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';

// @Controller()
// export class MetaController {
//   constructor(private readonly prisma: PrismaService) {}

//   // --- DEPARTMENTS ---

//   @Get('departments')
//   async getDepartments() {
//     return this.prisma.department.findMany({
//       orderBy: { name: 'asc' }
//     });
//   }

//   @Post('departments')
//   async createDepartment(@Body() body: { name: string }) {
//     // FIX: Auto-generate a 'code' from the name because the DB requires it.
//     // Example: "Public Works" -> "PUBLIC_WORKS"
//     const generatedCode = body.name
//       .toUpperCase()
//       .replace(/[^A-Z0-9]/g, '_'); 

//     return this.prisma.department.create({
//       data: { 
//         name: body.name,
//         code: generatedCode // 👈 Added required field
//       }
//     });
//   }

//   // --- WARDS ---

//   @Get('wards')
//   async getWards() {
//     return this.prisma.ward.findMany({
//       orderBy: { name: 'asc' }
//     });
//   }

//   @Post('wards')
//   async createWard(@Body() body: { name: string }) {
//     return this.prisma.ward.create({
//       data: { 
//         name: body.name,
//         // FIX: Provide the required cityCode (Default to 'pilot-city')
//         cityCode: process.env.CITY_CODE || 'pilot-city' 
//       }
//     });
//   }
// }

import { Controller, Get, Post, Body, Query, Delete, Param, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

// ✅ FIX 1: Add 'meta' here. This makes all routes start with /meta/
@Controller('meta')
export class MetaController {
  constructor(private readonly prisma: PrismaService) { }

  // --- DEPARTMENTS ---

  @Get('departments')
  async getDepartments() {
    return this.prisma.department.findMany({
      orderBy: { name: 'asc' }
    });
  }

  @Post('departments')
  async createDepartment(@Body() body: { name: string }) {
    // Auto-generate code: "Public Works" -> "PUBLIC_WORKS"
    const generatedCode = body.name
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '_');

    return this.prisma.department.create({
      data: {
        name: body.name,
        code: generatedCode
      }
    });
  }

  @Delete('departments/:id')
  async deleteDepartment(@Param('id') id: string) {
    try {
      return await this.prisma.department.delete({ where: { id } });
    } catch (e: any) {
      // ✅ FIX: specific error handling for linked data
      if (e.message.includes('foreign key constraint') || e.code === 'P2003') {
        throw new BadRequestException('Cannot delete: This department has linked complaints.');
      }
      throw e;
    }
  }

  // --- WARDS ---

  @Get('wards')
  async getWards(@Query('city') city?: string) {
    // ✅ FIX 2: Handle ?city=pilot-city parameter
    return this.prisma.ward.findMany({
      where: city ? { cityCode: city } : undefined,
      orderBy: { name: 'asc' }
    });
  }

  @Post('wards')
  async createWard(@Body() body: { name: string }) {
    return this.prisma.ward.create({
      data: {
        name: body.name,
        cityCode: process.env.CITY_CODE || 'pilot-city'
      }
    });
  }

  @Delete('wards/:id')
  async deleteWard(@Param('id') id: string) {
    try {
      return await this.prisma.ward.delete({ where: { id } });
    } catch (e: any) {
      // ✅ FIX: specific error handling for linked data
      if (e.message.includes('foreign key constraint') || e.code === 'P2003') {
        throw new BadRequestException('Cannot delete: This ward has linked complaints.');
      }
      throw e;
    }
  }
}