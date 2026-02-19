// import { Controller, Get, Req, UseGuards } from '@nestjs/common';
// import { OfficerService } from './officer.service';
// import { CivicAuthGuard } from '../auth/auth.guard';
// import { JwtCookieGuard } from '../auth2/jwt.guard';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';
// import { Role } from '@prisma/client';

// @Controller('/officer')
// @UseGuards(CivicAuthGuard, RolesGuard)
// export class OfficerController {
//   constructor(private officer: OfficerService) {}

//   @Get('/queue')
//   @Roles(Role.OFFICER)
//   queue(@Req() req: any) {
//     return this.officer.queue(req.user.id);
//   }
// }

import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { OfficerService } from './officer.service';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';
import { JwtCookieGuard } from '../auth2/jwt.guard';

@Controller('/officer')
@UseGuards(JwtCookieGuard, RolesGuard)
export class OfficerController {
  constructor(private officer: OfficerService) {}

  @Get('/queue')
  @Roles(Role.OFFICER)
  queue(@Req() req: any) {
    return this.officer.queue(req.user.id);
  }
}

