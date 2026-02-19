import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/health')
  health() {
    return {
      ok: true,
      service: 'api',
      city: process.env.CITY_CODE ?? 'unknown',
      ts: new Date().toISOString(),
    };
  }
}
