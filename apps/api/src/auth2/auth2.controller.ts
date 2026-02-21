// // import { Body, Controller, Post, Res } from '@nestjs/common';
// // import { Auth2Service } from './auth2.service';
// // import type { Response } from 'express';

// // @Controller('/auth')
// // export class Auth2Controller {
// //   constructor(private auth: Auth2Service) { }

// //   @Post('/request-otp')
// //   request(@Body() body: { phone: string }) {
// //     return this.auth.requestOtp(body.phone);
// //   }

// //   @Post('/verify-otp')
// //   async verify(@Body() body: { phone: string; code: string }, @Res({ passthrough: true }) res: Response) {
// //     const out = await this.auth.verifyOtp(body.phone, body.code);
// //     // res.cookie('civic_session', out.token, {
// //     //   httpOnly: true,
// //     //   sameSite: 'lax',
// //     //   secure: false, // set true on https
// //     //   maxAge: 7 * 24 * 3600_000,
// //     // });
// //     // res.cookie('civic_session', out.token, {
// //     //   httpOnly: true,

// //     //   sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
// //     //   secure: process.env.NODE_ENV === 'production',

// //     //   domain: process.env.NODE_ENV === 'production'
// //     //     ? '.civicloop.app'
// //     //     : undefined,

// //     //   maxAge: 7 * 24 * 3600_000,
// //     // });
// //     //   res.cookie('civic_session', out.token, {
// //     //     httpOnly: true,

// //     //     // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
// //     //     // secure: process.env.NODE_ENV === 'production' ? true : false,
// //     //     sameSite: 'lax',
// //     //     secure: false,
// //     //     path:'/',

// //     //     // domain: process.env.NODE_ENV === 'production'
// //     //     //   ? '.civicloop.app'
// //     //     //   : undefined,

// //     //     // maxAge: 7 * 24 * 3600_000,
// //     //     maxAge: 7 * 24 * 60 * 60 * 1000,
// //     //   });


// //     //   return { ok: true, user: out.user };
// //     // }
// //     // ... inside verifyOtp ...

// //     // Keep the cookie logic (it might work in production)
// //     res.cookie('civic_session', out.token, {
// //       httpOnly: true,
// //       sameSite: 'lax',
// //       secure: false,
// //       path: '/',
// //       maxAge: 7 * 24 * 60 * 60 * 1000,
// //     });

// //     // ✅ NEW: ALSO return the token in the JSON body
// //     return {
// //       ok: true,
// //       user: out.user,
// //       token: out.token  // 👈 Add this!
// //     };
// //   }

// //   @Post('/logout')
// //   logout(@Res({ passthrough: true }) res: Response) {
// //     res.clearCookie('civic_session');
// //     return { ok: true };
// //   }
// // }


// // gemini for admin

// // import { Body, Controller, Post, Res, UnauthorizedException } from '@nestjs/common';
// // import { Auth2Service } from './auth2.service';
// // import { PrismaService } from '../prisma/prisma.service'; // 👈 1. Import Prisma
// // import { Role } from '@prisma/client'; // 👈 2. Import Role Enum
// // import type { Response } from 'express';

// // @Controller('/auth')
// // export class Auth2Controller {
// //   // 👈 3. Inject PrismaService into the constructor
// //   constructor(
// //     private auth: Auth2Service,
// //     private prisma: PrismaService 
// //   ) { }

// //   // --- EXISTING CITIZEN FLOW (Kept exactly as you had it) ---

// //   @Post('/request-otp')
// //   request(@Body() body: { phone: string }) {
// //     return this.auth.requestOtp(body.phone);
// //   }

// //   @Post('/verify-otp')
// //   async verify(@Body() body: { phone: string; code: string }, @Res({ passthrough: true }) res: Response) {
// //     const out = await this.auth.verifyOtp(body.phone, body.code);

// //     // Your existing Cookie Logic
// //     res.cookie('civic_session', out.token, {
// //       httpOnly: true,
// //       sameSite: 'lax',
// //       secure: false,
// //       path: '/',
// //       maxAge: 7 * 24 * 60 * 60 * 1000,
// //     });

// //     // Return token in JSON body
// //     return {
// //       ok: true,
// //       user: out.user,
// //       token: out.token
// //     };
// //   }

// //   // --- 🚀 NEW STAFF FLOW STARTS HERE ---

// //   // 4. STAFF LOGIN (For Officers & Admins)
// //   @Post('/login-staff')
// //   async loginStaff(@Body() body: any, @Res({ passthrough: true }) res: Response) {
// //     const { email, password } = body;

// //     // A. Check Database for user
// //     const user = await this.prisma.user.findUnique({ where: { email } });

// //     // B. Verify Password (Simple string check for Pilot)
// //     if (!user || user.password !== password) {
// //       throw new UnauthorizedException('Invalid Email or Password');
// //     }

// //     // C. Generate Token (Using your Auth Service)
// //     const token = await this.auth.generateTokenForStaff(user);

// //     // D. Set Cookie (Matches your existing verifyOtp logic)
// //     res.cookie('civic_session', token, {
// //       httpOnly: true, secure: false, sameSite: 'lax', path: '/', maxAge: 7 * 24 * 60 * 60 * 1000,
// //     });

// //     return { ok: true, token, role: user.role };
// //   }

// //   // 5. REGISTER STAFF (Admin Only)
// //   // @Post('/register-staff')
// //   // async registerStaff(@Body() body: any) {
// //   //   const { email, password, name, role } = body;

// //   //   // Prevent duplicates
// //   //   const existing = await this.prisma.user.findUnique({ where: { email } });
// //   //   if (existing) throw new UnauthorizedException('User already exists');

// //   //   // Create New Staff User
// //   //   const newUser = await this.prisma.user.create({
// //   //     data: {
// //   //       email,
// //   //       password,
// //   //       name,
// //   //       role: role as Role,
// //   //       phone: '0000000000', // Dummy phone required by schema
// //   //     }
// //   //   });

// //   //   return { ok: true, user: newUser };
// //   // }
// //     // 5. REGISTER STAFF (Admin Only)
// //   @Post('/register-staff')
// //   async registerStaff(@Body() body: any) {
// //     const { email, password, name, role } = body;

// //     // Prevent duplicates
// //     const existing = await this.prisma.user.findUnique({ where: { email } });
// //     if (existing) throw new UnauthorizedException('User already exists');

// //     // Create New Staff User
// //     const newUser = await this.prisma.user.create({
// //       data: {
// //         email,
// //         password,
// //         name,
// //         role: role as Role,
// //         // 👇 FIX: Use a unique timestamp so phone is never duplicate
// //         phone: `STAFF-${Date.now()}`, 
// //       }
// //     });

// //     return { ok: true, user: newUser };
// //   }
// //   // --- NEW STAFF FLOW ENDS HERE ---

// //   @Post('/logout')
// //   logout(@Res({ passthrough: true }) res: Response) {
// //     res.clearCookie('civic_session');
// //     return { ok: true };
// //   }
// // }


// import { Body, Controller, Post, Res, Get, BadRequestException, Patch, Param, UseGuards, Req, NotFoundException } from '@nestjs/common';
// import { Auth2Service } from './auth2.service';
// import type { Response } from 'express';
// import { PrismaService } from '../prisma/prisma.service';
// import { JwtCookieGuard } from './jwt.guard';


// @Controller('/auth')
// export class Auth2Controller {
//   constructor(private auth: Auth2Service, private prisma: PrismaService) { }

//   // --- CITIZEN ---
//   @Post('/request-otp')
//   request(@Body() body: { phone: string }) {
//     return this.auth.requestOtp(body.phone);
//   }

//   @Post('/verify-otp')
//   async verify(@Body() body: { phone: string; code: string }, @Res({ passthrough: true }) res: Response) {
//     const out = await this.auth.verifyOtp(body.phone, body.code);

//     res.cookie('civic_session', out.token, {
//       httpOnly: true, secure: false, sameSite: 'lax', path: '/', maxAge: 7 * 24 * 3600_000
//     });

//     return { ok: true, user: out.user, token: out.token };
//   }

//   // --- STAFF ---
//   @Post('/login-staff')
//   async loginStaff(@Body() body: any, @Res({ passthrough: true }) res: Response) {
//     const out = await this.auth.loginStaff(body.email, body.password);

//     res.cookie('civic_session', out.token, {
//       httpOnly: true, secure: false, sameSite: 'lax', path: '/', maxAge: 7 * 24 * 3600_000
//     });

//     return { ok: true, token: out.token, role: out.role };
//   }

//   @Post('/register-staff')
//   async registerStaff(@Body() body: any) {
//     const user = await this.auth.registerStaff({
//       email: body.email,
//       password: body.password,
//       name: body.name,
//       role: body.role,
//     });
//     return { ok: true, user };
//   }

//   // @Post('/logout')
//   // logout(@Res({ passthrough: true }) res: Response) {
//   //   res.clearCookie('civic_session');
//   //   return { ok: true };
//   // }

//   @Get('users')
//   async getAllUsers() {
//     return this.prisma.user.findMany({
//       where: {
//         role: { in: ['ADMIN', 'OFFICER'] } // Fetch only Staff
//       },
//       select: {
//         id: true,
//         name: true,
//         email: true,
//         role: true,
//         isActive: true,   // ✅ ADD THIS
//         createdAt: true
//       }
//     });
//   }

//   // ✅ NEW: Toggle User Status
//   @Patch('users/:id/toggle-status')
//   async toggleUserStatus(@Param('id') id: string) {
//     // 1. Fetch current status
//     const user = await this.prisma.user.findUnique({ where: { id } });
//     if (!user) throw new NotFoundException('User not found');

//     // 2. Flip the status (true -> false, false -> true)
//     const updatedUser = await this.prisma.user.update({
//       where: { id },
//       data: { isActive: !user.isActive },
//     });

//     return updatedUser;
//   }


//   // @Get('/me')
//   // @UseGuards(JwtCookieGuard)
//   // getMe(@Req() req: any) {

//   //   return {
//   //     id: req.user.id,
//   //     name: req.user.name,
//   //     email: req.user.email,
//   //     role: req.user.role,
//   //   };
//   // }
//   // apps/api/src/auth2/auth2.controller.ts

//   @UseGuards(JwtCookieGuard)
//   @Get('me')
//   async getMe(@Req() req: any) {
//     const userId = req.user.sub || req.user.userId || req.user.id;

//     const user = await this.prisma.user.findUnique({
//       where: { id: userId },
//       include: {
//         ward: true,
//         department: true,
//         // ✅ UPDATED: Fetch full details for the task list
//         assignedComplaints: {
//           orderBy: { createdAt: 'desc' },
//           select: {
//             id: true,
//             title: true,
//             currentStatus: true,
//             category: true,
//             createdAt: true,
//             ward: { select: { name: true } }
//           }
//         }
//       }
//     });

//     if (user) (user as any).password = undefined;

//     return user;
//   }

//   // apps/api/src/auth2/auth2.controller.ts

//   // ✅ NEW: Public Profile Endpoint
//   // @UseGuards(JwtCookieGuard)
//   @Get('users/:id/profile')
//   async getUserProfile(@Param('id') id: string) {
//     const user = await this.prisma.user.findUnique({
//       where: { id },
//       include: {
//         ward: true,
//         department: true,
//         // Include tasks so the stats and list work
//         assignedComplaints: {
//           orderBy: { createdAt: 'desc' },
//           select: {
//             id: true,
//             title: true,
//             currentStatus: true,
//             category: true,
//             createdAt: true,
//             ward: { select: { name: true } }
//           }
//         }
//       }
//     });

//     if (!user) throw new NotFoundException('User not found');

//     // Safety: Remove password
//     (user as any).password = undefined;

//     return user;
//   }
//  @Post('logout')
//   async logout(@Res({ passthrough: true }) res: Response) {
//     // This instructs the browser to delete the cookie immediately
//     res.clearCookie('civic_session', {
//       httpOnly: true,
//       path: '/', // Important: Must match the path used when creating it
//     });

//     return { message: 'Logged out successfully' };
//   }

// }


import { Body, Controller, Post, Res, Get, BadRequestException, Patch, Param, UseGuards, Req, NotFoundException } from '@nestjs/common';
import { Auth2Service } from './auth2.service';
import type { Response } from 'express';
import { PrismaService } from '../prisma/prisma.service';
import { JwtCookieGuard } from './jwt.guard';

@Controller('/auth')
export class Auth2Controller {
  constructor(private auth: Auth2Service, private prisma: PrismaService) { }

  // --- ✅ UPDATED CITIZEN ENDPOINTS ---

  @Post('/request-otp')
  request(@Body() body: { identifier?: string; phone?: string }) {
    // Check identifier first, fallback to phone for backward compatibility with frontend
    const target = body.identifier || body.phone;
    if (!target) throw new BadRequestException('Email or phone is required');
    return this.auth.requestOtp(target);
  }

  @Post('/verify-otp')
  async verify(@Body() body: { identifier?: string; phone?: string; code: string }, @Res({ passthrough: true }) res: Response) {
    const target = body.identifier || body.phone;
    if (!target) throw new BadRequestException('Email or phone is required');

    const out = await this.auth.verifyOtp(target, body.code);

    // res.cookie('civic_session', out.token, {
    //   httpOnly: true, secure: false, sameSite: 'lax', path: '/', maxAge: 7 * 24 * 3600_000
    // });
    const isProd = process.env.NODE_ENV === 'production';

    // Replace this block in verify-otp and login-staff:
    res.cookie('civic_session', out.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax', // The Vercel proxy makes it Same-Site!
      path: '/',
      maxAge: 7 * 24 * 3600_000,
    });

    return { ok: true, user: out.user, token: out.token };
  }

  // --- 👮‍♂️ EXISTING STAFF ENDPOINTS (Untouched) ---

  @Post('/login-staff')
  async loginStaff(@Body() body: any, @Res({ passthrough: true }) res: Response) {
    const out = await this.auth.loginStaff(body.email, body.password);

    // res.cookie('civic_session', out.token, {
    //   httpOnly: true, secure: false, sameSite: 'lax', path: '/', maxAge: 7 * 24 * 3600_000
    // });
    const isProd = process.env.NODE_ENV === 'production';

    // Replace this block in verify-otp and login-staff:
    res.cookie('civic_session', out.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax', // The Vercel proxy makes it Same-Site!
      path: '/',
      maxAge: 7 * 24 * 3600_000,
    });
    return { ok: true, token: out.token, role: out.role };
  }

  @Post('/register-staff')
  async registerStaff(@Body() body: any) {
    const user = await this.auth.registerStaff({
      email: body.email,
      password: body.password,
      name: body.name,
      role: body.role,
      wardId: body.wardId,             // ✅ ADD THIS
      departmentId: body.departmentId, // ✅ ADD THIS
    });
    return { ok: true, user };
  }

  @Get('users')
  async getAllUsers() {
    return this.prisma.user.findMany({
      where: {
        role: { in: ['ADMIN', 'OFFICER'] } // Fetch only Staff
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true
      }
    });
  }

  @Patch('users/:id/toggle-status')
  async toggleUserStatus(@Param('id') id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: { isActive: !user.isActive },
    });

    return updatedUser;
  }

  @UseGuards(JwtCookieGuard)
  @Get('me')
  async getMe(@Req() req: any) {
    const userId = req.user.sub || req.user.userId || req.user.id;

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        ward: true,
        department: true,
        assignedComplaints: {
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            title: true,
            currentStatus: true,
            category: true,
            createdAt: true,
            ward: { select: { name: true } }
          }
        }
      }
    });

    if (user) (user as any).password = undefined;

    return user;
  }

  @Get('users/:id/profile')
  async getUserProfile(@Param('id') id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        ward: true,
        department: true,
        assignedComplaints: {
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            title: true,
            currentStatus: true,
            category: true,
            createdAt: true,
            ward: { select: { name: true } }
          }
        }
      }
    });

    if (!user) throw new NotFoundException('User not found');
    (user as any).password = undefined;

    return user;
  }

  // Add this inside Auth2Controller in auth2.controller.ts

  @UseGuards(JwtCookieGuard)
  @Patch('profile')
  async updateProfile(@Req() req: any, @Body() body: { name?: string; email?: string; phone?: string }) {
    const userId = req.user.sub || req.user.userId || req.user.id;

    try {
      const dataToUpdate: any = {};
      if (body.name) dataToUpdate.name = body.name;
      if (body.email) dataToUpdate.email = body.email;
      if (body.phone) dataToUpdate.phone = body.phone;

      const user = await this.prisma.user.update({
        where: { id: userId },
        data: dataToUpdate,
      });

      (user as any).password = undefined;
      return { ok: true, user };
    } catch (error: any) {
      // P2002 is Prisma's error code for "Unique constraint failed"
      if (error.code === 'P2002') {
        throw new BadRequestException('That email or phone number is already registered to another account.');
      }
      throw new BadRequestException('Failed to update profile.');
    }
  }

  // @Post('logout')
  // async logout(@Res({ passthrough: true }) res: Response) {
  //   // res.clearCookie('civic_session', {
  //   //   httpOnly: true,
  //   //   path: '/',
  //   // });
  //   res.clearCookie('civic_session', {
  //     httpOnly: true,
  //     secure: true,
  //     sameSite: 'none',
  //     path: '/',
  //   });

  //   return { message: 'Logged out successfully' };
  // }
  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('civic_session', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    return { message: 'Logged out successfully' };
  }
}