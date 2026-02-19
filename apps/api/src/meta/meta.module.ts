// import { Module } from '@nestjs/common';
// import { MetaController } from './meta.controller';
// import { MetaService } from './meta.service';

// @Module({
//   controllers: [MetaController],
//   providers: [MetaService],
// })
// export class MetaModule {}
import { Module } from '@nestjs/common';
import { MetaController } from './meta.controller';
import { PrismaService } from '../prisma/prisma.service'; 
// If you have a shared PrismaModule, you can import that instead of the service provider.

@Module({
  controllers: [MetaController],
  providers: [PrismaService],
})
export class MetaModule {}