// import { Module } from '@nestjs/common';

// @Module({})
// export class ComplaintsModule {}

// import { Module } from '@nestjs/common';
// import { ComplaintsService } from './complaints.service';
// import { ComplaintsController } from './complaints.controller';

// @Module({
//   providers: [ComplaintsService],
//   controllers: [ComplaintsController],
// })
// export class ComplaintsModule {}

import { Module } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { ComplaintsController } from './complaints.controller';
import { SlaModule } from '../sla/sla.module';
import { AssignModule } from '../assign/assign.module';
import { JwtModule } from '@nestjs/jwt';
import { ComplaintsGateway } from "./complaints.gateway";


@Module({
  imports: [SlaModule, AssignModule, JwtModule.register({}),],
  controllers: [ComplaintsController],
  providers: [ComplaintsService,
    ComplaintsGateway],
  exports: [ComplaintsService],
})
export class ComplaintsModule { }