import { Controller, Get, Query, Post, UseGuards, Req, Param, Body } from '@nestjs/common';
import { PublicService } from './public.service';

import { ComplaintsService } from '../complaints/complaints.service';



@Controller('/public')
export class PublicController {

  constructor(
    private pub: PublicService,
    private complaints: ComplaintsService
  ) { }


  @Get('/leaderboard')
  leaderboard(@Query('city') city?: string) {
    return this.pub.leaderboard(city ?? (process.env.CITY_CODE ?? 'pilot-city'));
  }

  @Get('/recent')
  recent(@Query('city') city?: string) {
    return this.pub.recent(city ?? (process.env.CITY_CODE ?? 'pilot-city'), 25);
  }

  @Get('/map')
  map(@Query('bbox') bbox: string, @Query('zoom') zoom?: string, @Query('city') city?: string) {
    return this.pub.map(city ?? (process.env.CITY_CODE ?? 'pilot-city'), bbox, Number(zoom ?? 14));
  }

  // @Post('/complaints/:id/upvote')
  // @UseGuards(JwtCookieGuard, RolesGuard)
  // @Roles(Role.CITIZEN)
  // upvote(@Req() req: any, @Param('id') id: string) {
  //   return this.complaints.upvote(id, req.user.id);
  // }

  // @Post('/complaints/:id/link-duplicate')
  // @UseGuards(JwtCookieGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.OFFICER)
  // linkDup(@Req() req: any, @Param('id') id: string, @Body() body: { canonicalId: string }) {
  //   return this.complaints.linkDuplicate(id, body.canonicalId, req.user.id, req.user.role);
  // }


}
