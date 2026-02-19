// import { Module } from '@nestjs/common';
// import { PublicController } from './public.controller';
// import { PublicService } from './public.service';

// @Module({
//   controllers: [PublicController],
//   providers: [PublicService],
// })
// export class PublicModule {}

import { Module } from '@nestjs/common';
import { PublicController } from './public.controller';
import { PublicService } from './public.service';
import { ComplaintsModule } from '../complaints/complaints.module';

@Module({
  imports: [ComplaintsModule],   // 👈 THIS
  providers: [PublicService],
  controllers: [PublicController],
})
export class PublicModule {}
