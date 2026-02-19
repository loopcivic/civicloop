// // import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// // import { JwtService } from '@nestjs/jwt';

// // @Injectable()
// // export class JwtCookieGuard implements CanActivate {
// //   constructor(private jwt: JwtService) {}

// //   async canActivate(ctx: ExecutionContext) {
// //     const req = ctx.switchToHttp().getRequest();
// //     const token = req.cookies?.civic_session;
// //     if (!token) throw new UnauthorizedException('No session');

// //     try {
// //       const payload = await this.jwt.verifyAsync(token, {
// //         secret: process.env.JWT_SECRET ?? 'dev_jwt_secret_change_me',
// //       });
// //       req.user = { id: payload.sub, role: payload.role, phone: payload.phone };
// //       return true;
// //     } catch {
// //       throw new UnauthorizedException('Invalid session');
// //     }
// //   }
// // }

// import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class JwtCookieGuard implements CanActivate {
//   constructor(private jwt: JwtService) {}

//   async canActivate(ctx: ExecutionContext) {
//     const req = ctx.switchToHttp().getRequest();
    
//     // 1. Try to get token from Cookie
//     let token = req.cookies?.civic_session;

//     // 2. If no cookie, try to get from Header (The Backup Plan)
//     if (!token && req.headers.authorization) {
//       const authHeader = req.headers.authorization;
//       if (authHeader.startsWith('Bearer ')) {
//         token = authHeader.split(' ')[1];
//       }
//     }

//     // 3. If STILL no token, then we fail
//     if (!token) throw new UnauthorizedException('No session');

//     // 4. Special Bypass for your Demo Token
//     if (token === 'citizen-demo-token') {
//         req.user = { id: 'user-1', role: 'CITIZEN' };
//         return true;
//     }

//     try {
//       const payload = await this.jwt.verifyAsync(token, {
//         secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me',
//       });
//       req.user = { id: payload.sub, role: payload.role, phone: payload.phone };
//       return true;
//     } catch {
//       throw new UnauthorizedException('Invalid session');
//     }
//   }
// }

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtCookieGuard implements CanActivate {
  private readonly logger = new Logger(JwtCookieGuard.name);

  constructor(private jwt: JwtService) {}

  async canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest();
    
    // 1. Try to get token from Cookie
    let token = req.cookies?.civic_session;

    // 2. If no cookie, try to get from Header (The Backup Plan)
    if (!token && req.headers.authorization) {
      const authHeader = req.headers.authorization;
      
      // ✅ FIX: Make "Bearer" check case-insensitive (bearer vs Bearer)
      if (authHeader.toLowerCase().startsWith('bearer ')) {
        token = authHeader.split(' ')[1];
      }
    }

    // 🔍 Debug Logs: See what the backend actually receives
    if (!token) {
        this.logger.warn(`🛑 Blocked Request to ${req.url}`);
        this.logger.warn(`   - Cookie: ${req.cookies?.civic_session ? 'Found' : 'Missing'}`);
        this.logger.warn(`   - Header: ${req.headers.authorization || 'Missing'}`);
        throw new UnauthorizedException('No session');
    }

    // 4. Special Bypass for Demo
    if (token === 'citizen-demo-token') {
        req.user = { id: 'user-1', role: 'CITIZEN' };
        return true;
    }

    try {
      const payload = await this.jwt.verifyAsync(token, {
        secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me',
      });
      req.user = { id: payload.sub, role: payload.role, phone: payload.phone };
      return true;
    } catch (e) {
      this.logger.error(`❌ Invalid Token: ${e.message}`);
      throw new UnauthorizedException('Invalid session');
    }
  }
}