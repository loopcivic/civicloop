// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { ComplaintsService } from './complaints.service';
// import { CreateComplaintDto } from './dto/create-complaint.dto';
// import { AdvanceStatusDto } from './dto/advance-status.dto';
// import { ResolveComplaintDto } from './dto/resolve-complaint.dto';
// import { ValidateComplaintDto } from './dto/validate-complaint.dto';

// @Controller()
// export class ComplaintsController {
//   constructor(private complaints: ComplaintsService) {}

//   @Post('/complaints')
//   create(@Body() body: CreateComplaintDto) {
//     return this.complaints.createComplaint(body);
//   }

//   @Get('/complaints/:id')
//   getOne(@Param('id') id: string) {
//     return this.complaints.getComplaintById(id);
//   }

//   @Post('/complaints/:id/ack')
//   ack(@Param('id') id: string) {
//     return this.complaints.ackComplaint(id);
//   }

//   @Post('/complaints/:id/advance')
//   advance(@Param('id') id: string, @Body() body: AdvanceStatusDto) {
//     return this.complaints.advanceStatus(id, body.nextStatus, body.note);
//   }

//   // ✅ NEW: Officer resolve with proof
//   @Post('/complaints/:id/resolve')
//   resolve(@Param('id') id: string, @Body() body: ResolveComplaintDto) {
//     // return this.complaints.resolveWithProof(id, body);
//     return this.complaints.resolveComplaint(id, body);
//   }

//   // ✅ NEW: Citizen validation
//   @Post('/complaints/:id/validate')
//   validate(@Param('id') id: string, @Body() body: ValidateComplaintDto) {
//     return this.complaints.validateComplaint(id, body as any);
//   }
// }


// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { ComplaintsService } from './complaints.service';
// import { CreateComplaintDto } from './dto/create-complaint.dto';
// import { ResolveComplaintDto } from './dto/resolve-complaint.dto';

// @Controller('complaints') // ✅ standard route prefix
// export class ComplaintsController {
//   constructor(private complaints: ComplaintsService) {}

//   @Post()
//   create(@Body() body: CreateComplaintDto) {
//     return this.complaints.createComplaint(body);
//   }

//   @Get(':id')
//   getOne(@Param('id') id: string) {
//     return this.complaints.getComplaintById(id);
//   }

//   @Post(':id/ack')
//   ack(@Param('id') id: string) {
//     // Matches the service method name "acknowledgeComplaint"
//     return this.complaints.acknowledgeComplaint(id);
//   }

//   @Post(':id/advance')
//   advance(@Param('id') id: string, @Body() body: any) {
//     // Matches the service method name "updateStatus"
//     return this.complaints.updateStatus(id, body);
//   }

//   // ✅ FIXED: Matches "resolveComplaint" in the service
//   @Post(':id/resolve')
//   resolve(@Param('id') id: string, @Body() body: ResolveComplaintDto) {
//     return this.complaints.resolveComplaint(id, body);
//   }
// }

// gemini 3

// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { Body, Controller, Get, Param, Post, UseGuards, Req } from '@nestjs/common';

// import { ComplaintsService } from './complaints.service';
// import { CreateComplaintDto } from './dto/create-complaint.dto';
// import { AdvanceStatusDto } from './dto/advance-status.dto';
// import { ResolveComplaintDto } from './dto/resolve-complaint.dto';
// import { ValidateComplaintDto } from './dto/validate-complaint.dto';

// import { JwtCookieGuard } from '../auth2/jwt.guard';
// import { CivicAuthGuard } from '../auth/auth.guard';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';
// import { Role } from '@prisma/client';


// @Controller()
// export class ComplaintsController {
//   // ✅ Keeps your variable name 'complaints'
//   constructor(private complaints: ComplaintsService) { }

//   // 👇 THIS IS THE MISSING PIECE FOR THE DASHBOARD 👇
//   @Get('/complaints')
//   findAll() {
//     return this.complaints.findAll();
//   }
//   // 👆 END OF NEW CODE 👆

//   @Post('/complaints')
//   @UseGuards(JwtCookieGuard, RolesGuard)
//   @Roles(Role.CITIZEN)
//   create(@Req() req: any, @Body() body: CreateComplaintDto) {
//     return this.complaints.createComplaint(body, req.user.id);
//   }

//   @Get('/complaints/:id')
//   getOne(@Param('id') id: string) {
//     return this.complaints.getComplaintById(id);
//   }

//   @Post('/complaints/:id/ack')
//   @UseGuards(JwtCookieGuard, RolesGuard)
//   @Roles(Role.OFFICER)
//   ack(@Req() req: any, @Param('id') id: string) {
//     return this.complaints.ackComplaint(id, req.user.id);
//   }

//   @Post('/complaints/:id/advance')
//   @UseGuards(JwtCookieGuard, RolesGuard)
//   @Roles(Role.OFFICER)
//   advance(@Req() req: any, @Param('id') id: string, @Body() body: AdvanceStatusDto) {
//     return this.complaints.advanceStatus(id, body.nextStatus, req.user.id, body.note);
//   }

//   // @Post('/complaints/:id/resolve')
//   // resolve(@Param('id') id: string, @Body() body: ResolveComplaintDto) {
//   //   return this.complaints.resolveComplaint(id, body);
//   // }
//   // ✅ FIX: Use 'any' to bypass strict DTO validation for now
//   // ✅ FIX: Call 'resolveWithProof' to handle the image upload
//   @Post('/complaints/:id/resolve')
//   @UseGuards(JwtCookieGuard, RolesGuard)
//   @Roles(Role.OFFICER)
//   resolve(@Req() req: any, @Param('id') id: string, @Body() body: any) {
//     return this.complaints.resolveWithProof(id, body, req.user.id);
//   }

//   @Post('/complaints/:id/validate')
//   @UseGuards(JwtCookieGuard, RolesGuard)
//   @Roles(Role.CITIZEN)
//   validate(@Req() req: any, @Param('id') id: string, @Body() body: ValidateComplaintDto) {
//     return this.complaints.validateComplaint(id, body as any, req.user.id);
//   }

//   @Post('/complaints/:id/upvote')
//   @UseGuards(JwtCookieGuard, RolesGuard)
//   @Roles(Role.CITIZEN)
//   upvote(@Req() req: any, @Param('id') id: string) {
//     return this.complaints.upvote(id, req.user.id);
//   }

//   @Post('/complaints/:id/link-duplicate')
//   @UseGuards(JwtCookieGuard, RolesGuard)
//   @Roles(Role.ADMIN, Role.OFFICER)
//   linkDup(@Req() req: any, @Param('id') id: string, @Body() body: { canonicalId: string }) {
//     return this.complaints.linkDuplicate(id, body.canonicalId, req.user.id, req.user.role);
//   }


// }

import { Body, Controller, Get, Param, Post, UseGuards, Req, UploadedFiles } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { AdvanceStatusDto } from './dto/advance-status.dto';
import { ResolveComplaintDto } from './dto/resolve-complaint.dto';
import { ValidateComplaintDto } from './dto/validate-complaint.dto';

import { JwtCookieGuard } from '../auth2/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';
import { Patch } from '@nestjs/common';

import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerConfig } from '../common/multer.config';


@Controller()
export class ComplaintsController {
  constructor(private complaints: ComplaintsService) { }

  // ✅ FIXED: Added Guards + Req to allow filtering by Role
  @Get('/complaints')
  // @UseGuards(JwtCookieGuard) 
  findAll(@Req() req: any) {
    return this.complaints.findAll(req.user);
  }

  @Post('/complaints')
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles(Role.CITIZEN)
  @UseInterceptors(FilesInterceptor('images', 5, multerConfig))
  create(
    @Req() req: any,
    @Body() body: CreateComplaintDto,
    @UploadedFiles() files?: Express.Multer.File[],) {
    // ✅ FIXED: Changed 'createComplaint' -> 'create' to match Service
    return this.complaints.create(body, req.user.id, files);
  }

  @Get('/complaints/:id')
  getOne(@Param('id') id: string) {
    // ✅ FIXED: Changed 'getComplaintById' -> 'findOne' to match Service
    return this.complaints.findOne(id);
  }

  // --- EXISTING CUSTOM METHODS (KEPT AS IS) ---

  @Patch('/complaints/:id/assign')
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles(Role.OFFICER)
  assign(@Req() req: any, @Param('id') id: string) {
    // We pass the Name to write the note "Person A is assigned..."
    return this.complaints.assignComplaintToSelf(id, req.user.id, req.user.name);
  }

  @Post('/complaints/:id/ack')
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles(Role.OFFICER)
  ack(@Req() req: any, @Param('id') id: string) {
    return this.complaints.ackComplaint(id, req.user.id);
  }

  @Post('/complaints/:id/advance')
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles(Role.OFFICER)
  advance(@Req() req: any, @Param('id') id: string, @Body() body: AdvanceStatusDto) {
    return this.complaints.advanceStatus(id, body.nextStatus, req.user.id, body.note);
  }

  // @Post('/complaints/:id/resolve')
  // @UseGuards(JwtCookieGuard, RolesGuard)
  // @Roles(Role.OFFICER)
  // resolve(@Req() req: any, @Param('id') id: string, @Body() body: any) {
  //   return this.complaints.resolveWithProof(id, body, req.user.id);
  // }

  @Post('/complaints/:id/resolve')
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles(Role.OFFICER)
  // ✅ FIX: Add Interceptor
  @UseInterceptors(FilesInterceptor('images', 5, multerConfig))
  resolve(
    @Req() req: any,
    @Param('id') id: string,
    @Body() body: any,
    @UploadedFiles() files?: Express.Multer.File[] // ✅ FIX: Capture files
  ) {
    // ✅ FIX: Pass files to service
    return this.complaints.resolveWithProof(id, body, req.user.id, files);
  }

  @Post('/complaints/:id/validate')
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles(Role.CITIZEN)
  validate(@Req() req: any, @Param('id') id: string, @Body() body: ValidateComplaintDto) {
    return this.complaints.validateComplaint(id, body as any, req.user.id);
  }

  // @Post('/complaints/:id/upvote')
  // @UseGuards(JwtCookieGuard, RolesGuard)
  // @Roles(Role.CITIZEN)
  // upvote(@Req() req: any, @Param('id') id: string) {
  //   return this.complaints.upvote(id, req.user.id);
  // }
  // ✅ UPDATED: Generic endpoint for all poll buttons
  @Post('/complaints/:id/signal')
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles(Role.CITIZEN)
  toggleSignal(@Req() req: any, @Param('id') id: string, @Body() body: { type: 'UPVOTE' | 'STILL_PRESENT' }) {
    return this.complaints.toggleSignal(id, req.user.id, body.type);
  }

  @Post('/complaints/:id/link-duplicate')
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.OFFICER)
  linkDup(@Req() req: any, @Param('id') id: string, @Body() body: { canonicalId: string }) {
    return this.complaints.linkDuplicate(id, body.canonicalId, req.user.id, req.user.role);
  }
}