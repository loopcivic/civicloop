import { Global, Module } from '@nestjs/common';
import { AssignService } from './assign.service';

@Global()
@Module({
  providers: [AssignService],
  exports: [AssignService],
})
export class AssignModule {}
