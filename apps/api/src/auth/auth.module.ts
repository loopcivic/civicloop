// import { Global, Module } from '@nestjs/common';
// import { AuthService } from './auth.service';

// @Global()
// @Module({
//   providers: [AuthService],
//   exports: [AuthService],
// })
// export class AuthModule {}


import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt'; // ✅ 1. Import JwtModule

@Global()
@Module({
  imports: [
    // ✅ 2. Configure JwtModule so it provides the 'JwtService' tool
    JwtModule.register({
      global: true, // Makes JwtService available everywhere
      secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
