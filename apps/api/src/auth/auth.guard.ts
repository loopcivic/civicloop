// import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { AuthService } from './auth.service';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private auth: AuthService) {}

//   async canActivate(ctx: ExecutionContext) {
//     const req = ctx.switchToHttp().getRequest();
    
//     // 1. Try to get token from the standard Header
//     let token = req.headers['authorization'];

//     // ✅ 2. FALLBACK: If header is missing, look in the Cookie!
//     // We append 'Bearer ' because your AuthService expects that format.
//     if (!token && req.cookies && req.cookies['civic_session']) {
//       token = `Bearer ${req.cookies['civic_session']}`;
//     }

//     // 3. If we still have no token, the AuthService will throw the error
//     if (!token) {
//         throw new UnauthorizedException('No token found in Header or Cookie');
//     }

//     req.user = await this.auth.authenticate(token);
//     return true;
//   }
// }
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class CivicAuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  async canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest();
    
    // 🔍 DEBUG LOGS: Spy on the request
    console.log("---------------- AUTH DEBUG ----------------");
    console.log("1. Cookies Received:", req.cookies); 
    console.log("2. Auth Header:", req.headers['authorization']);

    // 1. Check Header
    let token = req.headers['authorization'];

    // 2. Check Cookie
    if (!token && req.cookies && req.cookies['civic_session']) {
      console.log("3. Found token in Cookie!");
      token = `Bearer ${req.cookies['civic_session']}`;
    }

    if (!token) {
        console.log("❌ FAILED: No token found anywhere.");
        throw new UnauthorizedException('No token found in Header or Cookie');
    }

    try {
      req.user = await this.auth.authenticate(token);
      console.log("✅ SUCCESS: User authenticated:", req.user.id);
      return true;
    } catch (error) {
      console.log("❌ FAILED: Token invalid:", error.message);
      throw error;
    }
  }
}