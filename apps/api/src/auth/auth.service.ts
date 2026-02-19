// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { Role } from '@prisma/client';

// @Injectable()
// export class AuthService {
//   constructor(private prisma: PrismaService) {}

//   async authenticate(authHeader?: string) {
//     if (!authHeader?.startsWith('Bearer ')) {
//       throw new UnauthorizedException('Missing Bearer token');
//     }
//     const token = authHeader.slice('Bearer '.length).trim();

//     const citizenToken = process.env.CITIZEN_TOKEN;
//     const officerToken = process.env.OFFICER_TOKEN;
//     const adminToken = process.env.ADMIN_TOKEN;

//     let role: Role | null = null;
//     let email: string | null = null;
//     let name: string | null = null;

//     if (token && token === citizenToken) {
//       role = Role.CITIZEN;
//       email = 'pilot-citizen@civicloop.local';
//       name = 'Pilot Citizen';
//     } else if (token && token === officerToken) {
//       role = Role.OFFICER;
//       email = 'pilot-officer@civicloop.local';
//       name = 'Pilot Officer';
//     } else if (token && token === adminToken) {
//       role = Role.ADMIN;
//       email = 'pilot-admin@civicloop.local';
//       name = 'Pilot Admin';
//     } else {
//       throw new UnauthorizedException('Invalid token');
//     }

//     const user = await this.prisma.user.upsert({
//       where: { email },
//       update: { role },
//       create: { email, name, role },
//     });

//     return { id: user.id, role: user.role, email: user.email };
//   }
// }


// gemini

// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { Role } from '@prisma/client';

// @Injectable()
// export class AuthService {
//   constructor(private prisma: PrismaService) {}

//   async authenticate(authHeader?: string) {
//     console.log("🔍 AuthService received:", authHeader); // DEBUG LOG

//     // 1. Sanitize the input
//     if (!authHeader) {
//         throw new UnauthorizedException('Missing Authorization Header');
//     }

//     // Remove "Bearer " if it exists, otherwise use the whole string
//     const token = authHeader.startsWith('Bearer ') 
//         ? authHeader.slice(7).trim() 
//         : authHeader;

//     // 2. Define the Roles
//     let role: Role | null = null;
//     let email: string | null = null;
//     let name: string | null = null;

//     // ✅ THE MASTER KEY FIX
//     // This allows "citizen-demo-token" to work on any machine
//     if (token === 'citizen-demo-token') {
//       role = Role.CITIZEN;
//       email = 'pilot-citizen@civicloop.local';
//       name = 'Pilot Citizen';
//     } 
//     else if (token === 'officer-demo-token') {
//       role = Role.OFFICER;
//       email = 'pilot-officer@civicloop.local';
//       name = 'Pilot Officer';
//     } 
//     else {
//       // If it's not a demo token, try standard validation (or fail)
//       // You can add your JWT logic here later
//       throw new UnauthorizedException('Invalid Token: ' + token);
//     }

//     // 3. Sync with Database
//     const user = await this.prisma.user.upsert({
//       where: { email },
//       update: { role },
//       create: { email, name, role },
//     });

//     console.log("✅ Authenticated as:", user.name);
//     return { id: user.id, role: user.role, email: user.email };
//   }
// }

//gemini 2

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client'; // ✅ Make sure this matches your Prisma path
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) { }

  async authenticate(authHeader?: string) {
    console.log("🔍 AuthService received:", authHeader?.slice(0, 20) + "...");

    if (!authHeader) {
      throw new UnauthorizedException('Missing Authorization Header');
    }

    const token = authHeader.startsWith('Bearer ')
      ? authHeader.slice(7).trim()
      : authHeader;

    let role: Role | null = null;
    let email: string | null = null;
    let name: string | null = null;
    let userId: string | null = null;

    // 1. MANUAL DEMO TOKENS
    if (token === 'citizen-demo-token') {
      role = Role.CITIZEN;
      email = 'pilot-citizen@civicloop.local';
      name = 'Pilot Citizen';
    }
    else if (token === 'officer-demo-token') {
      role = Role.OFFICER;
      email = 'pilot-officer@civicloop.local';
      name = 'Pilot Officer';
    }
    // 2. REAL JWT VERIFICATION
    else {
      try {
        const payload = this.jwtService.verify(token, {
          secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me'
        });

        userId = payload.sub;

        // ✅ THE FIX: Cast the string from JWT to the Prisma Role Enum
        role = payload.role as Role;

        email = payload.email || `user-${payload.phone}@civicloop.local`;
        name = 'Citizen ' + payload.phone;

      } catch (e) {
        console.log("❌ Token Verification Failed:", e.message);
        throw new UnauthorizedException('Invalid Token: ' + e.message);
      }
    }

    // 3. DATABASE SYNC
    let user;
    if (userId) {
      user = await this.prisma.user.findUnique({ where: { id: userId } });

      if (!user) {
        // Create user if valid JWT but not in DB
        // ensure 'role' is not null before using it
        if (!role) role = Role.CITIZEN;

        user = await this.prisma.user.create({
          data: { id: userId, email: email!, name, role }
        });
      }
    } else {
      // Fallback for demo tokens
      user = await this.prisma.user.upsert({
        where: { email: email! },
        update: { role },
        create: { email: email!, name, role: role! },
      });
    }

    console.log("✅ Authenticated as:", user.name);
    return { id: user.id, role: user.role, email: user.email };
  }
  // ✅ ADD THIS NEW METHOD BELOW authenticate()
  async loginStaff(email: string, pass: string) {
    console.log(`🔐 Attempting login for: ${email}`);

    // 1. Check if user exists in DB (Created by Admin)
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // 2. Validate Password
    // Note: Since Admin panel sends plain text, we compare plain text here.
    // In production, you would use bcrypt.compare(pass, user.password)
    if (user.password !== pass) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // 3. Generate JWT
    // We strictly match the payload structure your 'authenticate' method expects
    const payload = {
      sub: user.id,       // 'authenticate' looks for payload.sub
      role: user.role,    // 'authenticate' looks for payload.role
      email: user.email,
      phone: user.phone || '0000000000'
    };

    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me',
      expiresIn: '1d', // Token valid for 1 day
    });

    console.log(`✅ Login successful. Role: ${user.role}`);

    // Return format expected by Frontend
    return {
      token: token,
      role: user.role
    };
  }
}