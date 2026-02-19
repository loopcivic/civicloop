import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { QueuesModule } from './queues/queues.module';
import { SlaModule } from './sla/sla.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PublicModule } from './public/public.module';
import { AuthModule } from './auth/auth.module';
import { MetaModule } from './meta/meta.module';
import { OfficerModule } from './officer/officer.module';
import { Auth2Module } from './auth2/auth2.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MetricsModule } from './metrics/metrics.module';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),
    AuthModule,
    Auth2Module,
    MetaModule,
    MetricsModule,
    OfficerModule,
    PrismaModule,
    QueuesModule,
    ScheduleModule.forRoot(),
    SlaModule,
    ComplaintsModule,
    PublicModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
