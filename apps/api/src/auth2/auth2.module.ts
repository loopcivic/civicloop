import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { Auth2Service } from './auth2.service';
import { Auth2Controller } from './auth2.controller';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from './email.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'dev_jwt_secret_change_me',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [Auth2Service, PrismaService, EmailService],
  controllers: [Auth2Controller],
  exports: [Auth2Service],
})
export class Auth2Module {}
