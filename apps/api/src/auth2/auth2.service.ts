// // import { BadRequestException, Injectable } from '@nestjs/common';
// // import { JwtService } from '@nestjs/jwt';
// // import { PrismaService } from '../prisma/prisma.service';
// // import { Role } from '@prisma/client';
// // import { sha256 } from '../common/hash';
// // import { nanoid } from 'nanoid';

// // @Injectable()
// // export class Auth2Service {
// //   constructor(private prisma: PrismaService, private jwt: JwtService) { }

// //   async requestOtp(phone: string) {
// //     if (!/^\+?[0-9]{10,15}$/.test(phone)) throw new BadRequestException('Invalid phone');

// //     const code = String(Math.floor(100000 + Math.random() * 900000));
// //     const codeHash = sha256(code + '|' + (process.env.OTP_SALT ?? 'dev_salt'));

// //     const expiresAt = new Date(Date.now() + 5 * 60_000);

// //     await this.prisma.otpCode.create({
// //       data: { phone, codeHash, expiresAt },
// //     });

// //     // ✅ Pilot “realistic”: print OTP to server logs
// //     console.log(`[OTP] phone=${phone} code=${code} expires=5min`);

// //     return { ok: true, expiresInSec: 300 };
// //   }

// //   async verifyOtp(phone: string, code: string) {
// //     const codeHash = sha256(code + '|' + (process.env.OTP_SALT ?? 'dev_salt'));

// //     const record = await this.prisma.otpCode.findFirst({
// //       where: {
// //         phone,
// //         codeHash,
// //         usedAt: null,
// //         expiresAt: { gt: new Date() },
// //       },
// //       orderBy: { createdAt: 'desc' },
// //     });

// //     if (!record) throw new BadRequestException('Invalid/expired OTP');

// //     await this.prisma.otpCode.update({
// //       where: { id: record.id },
// //       data: { usedAt: new Date() },
// //     });

// //     // Create user if not exists (citizen by default)
// //     // ✅ Role mapping for pilot
// //     let role: Role = Role.CITIZEN;
// //     if (process.env.OFFICER_PHONE && phone === process.env.OFFICER_PHONE) role = Role.OFFICER;
// //     if (process.env.ADMIN_PHONE && phone === process.env.ADMIN_PHONE) role = Role.ADMIN;

// //     const user = await this.prisma.user.upsert({
// //       where: { phone },
// //       update: { role },
// //       create: { phone, role, name: `${role}-${nanoid(6)}` },
// //     });

// //     // ✅ If officer, ensure Officer row exists (ward+dept)
// //     if (role === Role.OFFICER) {
// //       const cityCode = process.env.CITY_CODE ?? 'pilot-city';
// //       const wardName = process.env.OFFICER_DEFAULT_WARD_NAME ?? 'Ward 1';
// //       const deptCode = process.env.OFFICER_DEFAULT_DEPT_CODE ?? 'PWD';

// //       const ward = await this.prisma.ward.findFirst({ where: { cityCode, name: wardName } });
// //       const dept = await this.prisma.department.findUnique({ where: { code: deptCode } });

// //       if (ward && dept) {
// //         await this.prisma.officer.upsert({
// //           where: { userId: user.id },
// //           update: { wardId: ward.id, departmentId: dept.id },
// //           create: { userId: user.id, wardId: ward.id, departmentId: dept.id },
// //         });
// //       } else {
// //         console.log(`[OFFICER_SETUP] Missing ward/dept. ward=${wardName} dept=${deptCode}`);
// //       }
// //     }


// //     const token = await this.jwt.signAsync({
// //       sub: user.id,
// //       role: user.role,
// //       phone: user.phone,
// //     });

// //     return { token, user: { id: user.id, role: user.role } };
// //   }
// // }


// // gemini for admin

// // import { BadRequestException, Injectable } from '@nestjs/common';
// // import { JwtService } from '@nestjs/jwt';
// // import { PrismaService } from '../prisma/prisma.service';
// // import { Role } from '@prisma/client';
// // import { sha256 } from '../common/hash';
// // import { nanoid } from 'nanoid';

// // @Injectable()
// // export class Auth2Service {
// //   constructor(private prisma: PrismaService, private jwt: JwtService) { }

// //   async requestOtp(phone: string) {
// //     if (!/^\+?[0-9]{10,15}$/.test(phone)) throw new BadRequestException('Invalid phone');

// //     const code = String(Math.floor(100000 + Math.random() * 900000));
// //     const codeHash = sha256(code + '|' + (process.env.OTP_SALT ?? 'dev_salt'));

// //     const expiresAt = new Date(Date.now() + 5 * 60_000);

// //     await this.prisma.otpCode.create({
// //       data: { phone, codeHash, expiresAt },
// //     });

// //     // ✅ Pilot “realistic”: print OTP to server logs
// //     console.log(`[OTP] phone=${phone} code=${code} expires=5min`);

// //     return { ok: true, expiresInSec: 300 };
// //   }

// //   async verifyOtp(phone: string, code: string) {
// //     const codeHash = sha256(code + '|' + (process.env.OTP_SALT ?? 'dev_salt'));

// //     const record = await this.prisma.otpCode.findFirst({
// //       where: {
// //         phone,
// //         codeHash,
// //         usedAt: null,
// //         expiresAt: { gt: new Date() },
// //       },
// //       orderBy: { createdAt: 'desc' },
// //     });

// //     if (!record) throw new BadRequestException('Invalid/expired OTP');

// //     await this.prisma.otpCode.update({
// //       where: { id: record.id },
// //       data: { usedAt: new Date() },
// //     });

// //     // Create user if not exists (citizen by default)
// //     // ✅ Role mapping for pilot
// //     let role: Role = Role.CITIZEN;
// //     if (process.env.OFFICER_PHONE && phone === process.env.OFFICER_PHONE) role = Role.OFFICER;
// //     if (process.env.ADMIN_PHONE && phone === process.env.ADMIN_PHONE) role = Role.ADMIN;

// //     const user = await this.prisma.user.upsert({
// //       where: { phone },
// //       update: { role },
// //       create: { phone, role, name: `${role}-${nanoid(6)}` },
// //     });

// //     // ✅ If officer, ensure Officer row exists (ward+dept)
// //     if (role === Role.OFFICER) {
// //       const cityCode = process.env.CITY_CODE ?? 'pilot-city';
// //       const wardName = process.env.OFFICER_DEFAULT_WARD_NAME ?? 'Ward 1';
// //       const deptCode = process.env.OFFICER_DEFAULT_DEPT_CODE ?? 'PWD';

// //       const ward = await this.prisma.ward.findFirst({ where: { cityCode, name: wardName } });
// //       const dept = await this.prisma.department.findUnique({ where: { code: deptCode } });

// //       if (ward && dept) {
// //         await this.prisma.officer.upsert({
// //           where: { userId: user.id },
// //           update: { wardId: ward.id, departmentId: dept.id },
// //           create: { userId: user.id, wardId: ward.id, departmentId: dept.id },
// //         });
// //       } else {
// //         console.log(`[OFFICER_SETUP] Missing ward/dept. ward=${wardName} dept=${deptCode}`);
// //       }
// //     }

// //     const token = await this.jwt.signAsync({
// //       sub: user.id,
// //       role: user.role,
// //       phone: user.phone,
// //     });

// //     return { token, user: { id: user.id, role: user.role } };
// //   }

// //   // 👇👇👇 NEW HELPER FOR STAFF LOGIN 👇👇👇
// //   async generateTokenForStaff(user: any) {
// //     const payload = {
// //       sub: user.id,           
// //       role: user.role,        
// //       phone: user.phone || '0000000000', // Use dummy phone if staff has none
// //       email: user.email       
// //     };

// //     return this.jwt.signAsync(payload);
// //   }
// // }


// import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { Role } from '@prisma/client';
// import { nanoid } from 'nanoid';
// import { PrismaService } from '../prisma/prisma.service';
// import { sha256 } from '../common/hash';
// import * as bcrypt from 'bcrypt';

// @Injectable()
// export class Auth2Service {
//   constructor(private prisma: PrismaService, private jwt: JwtService) { }

//   // --- EXISTING CITIZEN OTP LOGIC (Preserved) ---
//   async requestOtp(phone: string) {
//     if (!/^\+?[0-9]{10,15}$/.test(phone)) throw new BadRequestException('Invalid phone');

//     const code = String(Math.floor(100000 + Math.random() * 900000));
//     const codeHash = sha256(code + '|' + (process.env.OTP_SALT ?? 'dev_salt'));
//     const expiresAt = new Date(Date.now() + 5 * 60_000);

//     await this.prisma.otpCode.create({ data: { phone, codeHash, expiresAt } });
//     console.log(`[OTP] phone=${phone} code=${code} expires=5min`); // Log for Pilot
//     return { ok: true, expiresInSec: 300 };
//   }

//   async verifyOtp(phone: string, code: string) {
//     const codeHash = sha256(code + '|' + (process.env.OTP_SALT ?? 'dev_salt'));
//     const record = await this.prisma.otpCode.findFirst({
//       where: { phone, codeHash, usedAt: null, expiresAt: { gt: new Date() } },
//       orderBy: { createdAt: 'desc' },
//     });

//     if (!record) throw new BadRequestException('Invalid/expired OTP');

//     await this.prisma.otpCode.update({ where: { id: record.id }, data: { usedAt: new Date() } });

//     // Role Logic
//     let role: Role = Role.CITIZEN;
//     if (process.env.OFFICER_PHONE && phone === process.env.OFFICER_PHONE) role = Role.OFFICER;
//     if (process.env.ADMIN_PHONE && phone === process.env.ADMIN_PHONE) role = Role.ADMIN;

//     const user = await this.prisma.user.upsert({
//       where: { phone },
//       update: { role },
//       create: { phone, role, name: `${role}-${nanoid(6)}` },
//     });

//     // Generate Token
//     const token = this.jwt.sign({
//       sub: user.id,
//       role: user.role,
//       phone: user.phone,
//       email: user.email
//     }, { secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me' });

//     return { token, user: { id: user.id, role: user.role } };
//   }

//   // --- 👮‍♂️ STAFF LOGIC (NEW) ---

//   // // 1. LOGIN STAFF (With Master Admin Backdoor)
//   // async loginStaff(email: string, pass: string) {

//   //   // 🔓 MASTER ADMIN CHECK (Hardcoded)
//   //   if (email === 'admin@civic.com' && pass === 'admin123') {
//   //     console.log("⚡ MASTER ADMIN LOGIN");
//   //     const token = this.jwt.sign({
//   //       sub: 'master-admin',
//   //       role: 'ADMIN',
//   //       email: email,
//   //       phone: 'ADMIN-MASTER'
//   //     }, { secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me' });

//   //     return { token, role: 'ADMIN', user: { id: 'master', role: 'ADMIN', name: 'Master Admin' } };
//   //   }

//   //   // Normal Database Check
//   //   const user = await this.prisma.user.findUnique({ where: { email } });

//   //   if (!user || user.password !== pass) {
//   //     throw new UnauthorizedException('Invalid credentials');
//   //   }

//   //   const token = this.jwt.sign({
//   //     sub: user.id,
//   //     role: user.role,
//   //     phone: user.phone,
//   //     email: user.email
//   //   }, { secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me' });

//   //   return { token, role: user.role, user };
//   // }
//   // apps/api/src/auth2/auth2.service.ts

//   // async loginStaff(email: string, pass: string) {
//   //   // 1. Find User
//   //   const user = await this.prisma.user.findUnique({ where: { email } });

//   //   if (!user) {
//   //     throw new UnauthorizedException('Invalid credentials');
//   //   }

//   //   // 2. ✅ FIX: Use bcrypt to compare the input password with the stored hash
//   //   const isMatch = await bcrypt.compare(pass, user.password || '');

//   //   // 3. Fallback for legacy plain-text passwords (Optional: Remove in production)
//   //   // If bcrypt check fails, check if it matches plaintext (for your old "worker" accounts)
//   //   if (!isMatch && user.password !== pass) {
//   //     throw new UnauthorizedException('Invalid credentials');
//   //   }

//   //   // 4. Generate Token
//   //   const token = this.jwt.sign({
//   //     sub: user.id,
//   //     role: user.role,
//   //     email: user.email,
//   //   }, { secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me' });

//   //   return { token, role: user.role, user: { id: user.id, role: user.role, name: user.name } };
//   // }

//   // apps/api/src/auth2/auth2.service.ts

//   // async loginStaff(email: string, pass: string) {
//   //   // 1. Find the User
//   //   const user = await this.prisma.user.findUnique({ where: { email } });

//   //   if (!user) {
//   //     throw new UnauthorizedException('Invalid credentials');
//   //   }

//   //   // ✅ ENFORCE DEACTIVATION: Check if isActive is false
//   //   if (user.isActive === false) {
//   //     throw new UnauthorizedException('Your account has been deactivated. Please contact an Administrator.');
//   //   }

//   //   // 2. Compare Hash
//   //   const isMatch = await bcrypt.compare(pass, user.password || '');

//   //   // 3. Plaintext Fallback (Matches your existing logic)
//   //   if (!isMatch && user.password !== pass) {
//   //     throw new UnauthorizedException('Invalid credentials');
//   //   }

//   //   // 4. Sign and Return Token
//   //   const token = this.jwt.sign({
//   //     sub: user.id,
//   //     role: user.role,
//   //     email: user.email,
//   //   }, { secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me' });

//   //   return { token, role: user.role, user: { id: user.id, role: user.role, name: user.name } };
//   // }
//   // apps/api/src/auth2/auth2.service.ts

//   async loginStaff(email: string, pass: string) {
//     // 1. Find the User
//     const user = await this.prisma.user.findUnique({ where: { email } });

//     // If the user doesn't exist at all, give the standard error
//     if (!user) {
//       throw new UnauthorizedException('Invalid credentials');
//     }

//     // ✅ NEW: Specific check for Inactive Status
//     // We do this before checking the password so the message is clear
//     if (user.isActive === false) {
//       throw new UnauthorizedException('Your account is currently inactive. Please contact your administrator for access.');
//     }

//     // 2. Compare Password Hash
//     const isMatch = await bcrypt.compare(pass, user.password || '');

//     // 3. Plaintext Fallback (Matches your existing legacy logic)
//     if (!isMatch && user.password !== pass) {
//       throw new UnauthorizedException('Invalid credentials');
//     }

//     // 4. If all checks pass, generate the token
//     const token = this.jwt.sign({
//       sub: user.id,
//       role: user.role,
//       email: user.email,
//     }, { secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me' });

//     return {
//       token,
//       role: user.role,
//       user: { id: user.id, role: user.role, name: user.name }
//     };
//   }
//   // 2. REGISTER STAFF (For Admin Panel)
//   //   async registerStaff(data: { email: string; password: string; name: string; role: Role }) {
//   //     const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
//   //     if (existing) throw new BadRequestException('User already exists');

//   //     const newUser = await this.prisma.user.create({
//   //       data: {
//   //         email: data.email,
//   //         password: data.password,
//   //         name: data.name,
//   //         role: data.role,
//   //         phone: `STAFF-${Date.now()}`, // Unique timestamp to prevent crash
//   //       }
//   //     });

//   //     return newUser;
//   //   
//   async registerStaff(data: {
//     email: string;
//     password: string;
//     name: string;
//     role: Role;
//     wardId?: string;
//     departmentId?: string;
//   }) {
//     // 1. Check if user exists
//     const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
//     if (existing) throw new BadRequestException('Email already exists');

//     // 2. Hash password
//     const hashedPassword = await bcrypt.hash(data.password, 10);

//     // 3. Create User & Save Ward/Dept
//     const user = await this.prisma.user.create({
//       data: {
//         email: data.email,
//         password: hashedPassword,
//         name: data.name,
//         role: data.role,
//         phone: 'STAFF',

//         // ✅ CRITICAL FIX: Explicitly save these fields!
//         wardId: data.role === 'OFFICER' && data.wardId ? data.wardId : null,
//         departmentId: data.role === 'OFFICER' && data.departmentId ? data.departmentId : null,
//       },
//     });

//     return { id: user.id, email: user.email, role: user.role };
//   }
// }

import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';
import { nanoid } from 'nanoid';
import { PrismaService } from '../prisma/prisma.service';
import { sha256 } from '../common/hash';
import * as bcrypt from 'bcrypt';
import { EmailService } from './email.service';

@Injectable()
export class Auth2Service {
  constructor(private prisma: PrismaService, private jwt: JwtService, private emailService: EmailService) { }

  // --- ✅ NEW UNIFIED CITIZEN OTP LOGIC (Email & Phone) ---
  
  async requestOtp(identifier: string) {
    const isEmail = identifier.includes('@');
    
    // Validate format
    if (!isEmail && !/^\+?[0-9]{10,15}$/.test(identifier)) {
      throw new BadRequestException('Invalid phone or email format');
    }

    const code = String(Math.floor(100000 + Math.random() * 900000)); // 6-digit OTP
    const codeHash = sha256(code + '|' + (process.env.OTP_SALT ?? 'dev_salt'));
    const expiresAt = new Date(Date.now() + 5 * 60_000); // 5 mins

    // Save to the new VerificationToken table
    await this.prisma.verificationToken.create({ 
      data: { identifier, token: codeHash, expiresAt } 
    });

    // Logging for Pilot / Dev Mode
    if (isEmail) {
      console.log(`📧 [EMAIL OTP] Send to ${identifier}: ${code} (expires in 5min)`);
      try {
        await this.emailService.sendOtpEmail(identifier, code);
      } catch (error) {
        console.error("Failed to send email:", error);
        throw new BadRequestException("Could not send email. Please check server configuration.");
      }
      // Future: await this.emailService.sendMail(identifier, code);
    } else {
      console.log(`📱 [SMS OTP] Send to ${identifier}: ${code} (expires in 5min)`);
    }

    return { ok: true, expiresInSec: 300 };
  }

  async verifyOtp(identifier: string, code: string) {
    const isEmail = identifier.includes('@');
    const codeHash = sha256(code + '|' + (process.env.OTP_SALT ?? 'dev_salt'));
    
    // Find the token
    const record = await this.prisma.verificationToken.findFirst({
      where: { identifier, token: codeHash },
      orderBy: { createdAt: 'desc' },
    });

    if (!record) throw new BadRequestException('Invalid OTP');
    if (record.expiresAt < new Date()) throw new BadRequestException('OTP has expired');

    // Delete so it can't be reused
    await this.prisma.verificationToken.delete({ where: { id: record.id } });

    // Role Logic (Preserved your environment variable overrides)
    let role: Role = Role.CITIZEN;
    if (!isEmail) {
      if (process.env.OFFICER_PHONE && identifier === process.env.OFFICER_PHONE) role = Role.OFFICER;
      if (process.env.ADMIN_PHONE && identifier === process.env.ADMIN_PHONE) role = Role.ADMIN;
    }

    // Upsert User
    const user = await this.prisma.user.upsert({
      where: isEmail ? { email: identifier } : { phone: identifier },
      update: { role },
      create: { 
        email: isEmail ? identifier : null,
        phone: !isEmail ? identifier : null,
        role, 
        name: `${role}-${nanoid(6)}` 
      },
    });

    // Generate Token
    const token = this.jwt.sign({
      sub: user.id,
      role: user.role,
      phone: user.phone,
      email: user.email
    }, { secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me' });

    return { token, user: { id: user.id, role: user.role, name: user.name } };
  }

  // --- 👮‍♂️ EXISTING STAFF LOGIC (Untouched) ---

  async loginStaff(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (user.isActive === false) {
      throw new UnauthorizedException('Your account is currently inactive. Please contact your administrator for access.');
    }

    const isMatch = await bcrypt.compare(pass, user.password || '');

    if (!isMatch && user.password !== pass) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwt.sign({
      sub: user.id,
      role: user.role,
      email: user.email,
    }, { secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me' });

    return {
      token,
      role: user.role,
      user: { id: user.id, role: user.role, name: user.name }
    };
  }

  async registerStaff(data: {
    email: string;
    password: string;
    name: string;
    role: Role;
    wardId?: string;
    departmentId?: string;
  }) {
    const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (existing) throw new BadRequestException('Email already exists');

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
        role: data.role,
        phone: 'STAFF',
        wardId: data.role === 'OFFICER' && data.wardId ? data.wardId : null,
        departmentId: data.role === 'OFFICER' && data.departmentId ? data.departmentId : null,
      },
    });

    return { id: user.id, email: user.email, role: user.role };
  }
}