// // import { PrismaClient, Category } from '@prisma/client';

// // const prisma = new PrismaClient();

// // async function main() {
// //   const cityCode = process.env.CITY_CODE || 'pilot-city';

// //   // Departments
// //   const departments = [
// //     { code: 'PWD', name: 'Public Works Department' },
// //     { code: 'WATER', name: 'Water Board' },
// //     { code: 'SWM', name: 'Solid Waste Management' },
// //     { code: 'ELECT', name: 'Electricity / Street Lighting' },
// //     { code: 'SEW', name: 'Sewage / Drainage' },
// //   ];

// //   for (const d of departments) {
// //     await prisma.department.upsert({
// //       where: { code: d.code },
// //       update: { name: d.name },
// //       create: d,
// //     });
// //   }

// //   // Wards (pilot: 5 wards)
// //   const wardNames = ['Ward 1', 'Ward 2', 'Ward 3', 'Ward 4', 'Ward 5'];
// //   for (const name of wardNames) {
// //     await prisma.ward.create({
// //       data: { cityCode, name },
// //     }).catch(() => {});
// //   }

// //   const ward = await prisma.ward.findFirst({ where: { cityCode } });
// //   const pwd = await prisma.department.findUnique({ where: { code: 'PWD' } });

// //   if (!ward || !pwd) return;

// //   // SLA defaults (pilot)
// //   const slas = [
// //     { category: Category.ROAD, dept: 'PWD', ack: 24, res: 72 },
// //     { category: Category.WATER, dept: 'WATER', ack: 24, res: 72 },
// //     { category: Category.GARBAGE, dept: 'SWM', ack: 12, res: 48 },
// //     { category: Category.LIGHT, dept: 'ELECT', ack: 24, res: 72 },
// //     { category: Category.SEWAGE, dept: 'SEW', ack: 24, res: 96 },
// //     { category: Category.OTHER, dept: 'PWD', ack: 24, res: 96 },
// //   ];

// //   for (const s of slas) {
// //     const dept = await prisma.department.findUnique({ where: { code: s.dept } });
// //     if (!dept) continue;

// //     await prisma.sLA.upsert({
// //       where: { category_departmentId: { category: s.category, departmentId: dept.id } },
// //       update: { ackHours: s.ack, resolveHours: s.res },
// //       create: { category: s.category, departmentId: dept.id, ackHours: s.ack, resolveHours: s.res },
// //     });
// //   }

// //   // Demo Officer user
// //   const officerUser = await prisma.user.upsert({
// //     where: { email: 'pilot-officer@civicloop.local' },
// //     update: { role: 'OFFICER' },
// //     create: { email: 'pilot-officer@civicloop.local', name: 'Pilot Officer', role: 'OFFICER' },
// //   });

// //   await prisma.officer.upsert({
// //     where: { userId: officerUser.id },
// //     update: {},
// //     create: {
// //       userId: officerUser.id,
// //       departmentId: pwd.id,
// //       wardId: ward.id,
// //     },
// //   });

// //   console.log('✅ Seed complete');
// //   console.log('City:', cityCode);
// //   console.log('Sample officer:', officerUser.email);
// // }

// // main()
// //   .catch((e) => {
// //     console.error(e);
// //     process.exit(1);
// //   })
// //   .finally(async () => {
// //     await prisma.$disconnect();
// //   });


// // gemini for admin

// import { PrismaClient, Category, Role } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   const cityCode = process.env.CITY_CODE || 'pilot-city';

//   console.log('🌱 Starting Seed...');

//   // ===========================================
//   // 1. DEPARTMENTS
//   // ===========================================
//   const departments = [
//     { code: 'PWD', name: 'Public Works Department' },
//     { code: 'WATER', name: 'Water Board' },
//     { code: 'SWM', name: 'Solid Waste Management' },
//     { code: 'ELECT', name: 'Electricity / Street Lighting' },
//     { code: 'SEW', name: 'Sewage / Drainage' },
//   ];

//   for (const d of departments) {
//     await prisma.department.upsert({
//       where: { code: d.code },
//       update: { name: d.name },
//       create: d,
//     });
//   }

//   // ===========================================
//   // 2. WARDS
//   // ===========================================
//   const wardNames = ['Ward 1', 'Ward 2', 'Ward 3', 'Ward 4', 'Ward 5'];
//   for (const name of wardNames) {
//     // Check if exists to avoid duplicates in seed
//     const exists = await prisma.ward.findFirst({ where: { name, cityCode } });
//     if (!exists) {
//       await prisma.ward.create({ data: { cityCode, name } });
//     }
//   }

//   const ward = await prisma.ward.findFirst({ where: { cityCode } });
//   const pwd = await prisma.department.findUnique({ where: { code: 'PWD' } });

//   if (!ward || !pwd) return;

//   // ===========================================
//   // 3. SLAs
//   // ===========================================
//   const slas = [
//     { category: Category.ROAD, dept: 'PWD', ack: 24, res: 72 },
//     { category: Category.WATER, dept: 'WATER', ack: 24, res: 72 },
//     { category: Category.GARBAGE, dept: 'SWM', ack: 12, res: 48 },
//     { category: Category.LIGHT, dept: 'ELECT', ack: 24, res: 72 },
//     { category: Category.SEWAGE, dept: 'SEW', ack: 24, res: 96 },
//     { category: Category.OTHER, dept: 'PWD', ack: 24, res: 96 },
//   ];

//   for (const s of slas) {
//     const dept = await prisma.department.findUnique({ where: { code: s.dept } });
//     if (!dept) continue;

//     await prisma.sLA.upsert({
//       where: { category_departmentId: { category: s.category, departmentId: dept.id } },
//       update: { ackHours: s.ack, resolveHours: s.res },
//       create: { category: s.category, departmentId: dept.id, ackHours: s.ack, resolveHours: s.res },
//     });
//   }

//   // ===========================================
//   // 4. USERS (ADMIN & OFFICER)
//   // ===========================================
  
//   // ✅ A. MASTER ADMIN
//   const admin = await prisma.user.upsert({
//     where: { email: 'admin@civic.com' },
//     update: { password: 'admin123', role: Role.ADMIN }, // Ensure password updates if user exists
//     create: {
//       email: 'admin@civic.com',
//       password: 'admin123',
//       name: 'System Administrator',
//       role: Role.ADMIN,
//       phone: '0000000000',
//     },
//   });
//   console.log('✅ Admin Created: admin@civic.com / admin123');

//   // ✅ B. PILOT OFFICER (Updated with Password)
//   // We rename the email to match your new "Staff Login" pattern (optional, but cleaner)
//   const officerEmail = 'officer@civic.com'; 
  
//   const officerUser = await prisma.user.upsert({
//     where: { email: officerEmail },
//     update: { role: Role.OFFICER, password: 'officer123' },
//     create: { 
//       email: officerEmail, 
//       password: 'officer123', // Now they can log in!
//       name: 'Pilot Officer', 
//       role: Role.OFFICER,
//       phone: '1111111111'
//     },
//   });

//   await prisma.officer.upsert({
//     where: { userId: officerUser.id },
//     update: {},
//     create: {
//       userId: officerUser.id,
//       departmentId: pwd.id,
//       wardId: ward.id,
//     },
//   });
//   console.log('✅ Officer Created: officer@civic.com / officer123');

//   console.log('✅ Seed complete');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

import { PrismaClient, Category, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const cityCode = process.env.CITY_CODE || 'pilot-city';

  console.log('🌱 Starting Seed...');

  // ===========================================
  // 1. DEPARTMENTS
  // ===========================================
  const departments = [
    { code: 'PWD', name: 'Public Works Department' },
    { code: 'WATER', name: 'Water Board' },
    { code: 'SWM', name: 'Solid Waste Management' },
    { code: 'ELECT', name: 'Electricity / Street Lighting' },
    { code: 'SEW', name: 'Sewage / Drainage' },
  ];

  for (const d of departments) {
    await prisma.department.upsert({
      where: { code: d.code },
      update: { name: d.name },
      create: d,
    });
  }

  // ===========================================
  // 2. WARDS
  // ===========================================
  const wardNames = ['Ward 1', 'Ward 2', 'Ward 3', 'Ward 4', 'Ward 5'];
  for (const name of wardNames) {
    const exists = await prisma.ward.findFirst({ where: { name, cityCode } });
    if (!exists) {
      await prisma.ward.create({ data: { cityCode, name } });
    }
  }

  // Fetch required data for linking
  const ward = await prisma.ward.findFirst({ where: { cityCode } });
  const pwd = await prisma.department.findUnique({ where: { code: 'PWD' } });

  if (!ward || !pwd) {
    console.error("❌ Error: Could not find Ward or PWD department to link Officer.");
    return;
  }

  // ===========================================
  // 3. SLAs
  // ===========================================
  const slas = [
    { category: Category.ROAD, dept: 'PWD', ack: 24, res: 72 },
    { category: Category.WATER, dept: 'WATER', ack: 24, res: 72 },
    { category: Category.GARBAGE, dept: 'SWM', ack: 12, res: 48 },
    { category: Category.LIGHT, dept: 'ELECT', ack: 24, res: 72 },
    { category: Category.SEWAGE, dept: 'SEW', ack: 24, res: 96 },
    { category: Category.OTHER, dept: 'PWD', ack: 24, res: 96 },
  ];

  for (const s of slas) {
    const dept = await prisma.department.findUnique({ where: { code: s.dept } });
    if (!dept) continue;

    await prisma.sLA.upsert({
      where: { category_departmentId: { category: s.category, departmentId: dept.id } },
      update: { ackHours: s.ack, resolveHours: s.res },
      create: { category: s.category, departmentId: dept.id, ackHours: s.ack, resolveHours: s.res },
    });
  }

  // ===========================================
  // 4. USERS (ADMIN & OFFICER)
  // ===========================================
  
  // ✅ A. MASTER ADMIN
  await prisma.user.upsert({
    where: { email: 'admin@civic.com' },
    update: { password: 'admin123', role: Role.ADMIN },
    create: {
      email: 'admin@civic.com',
      password: 'admin123',
      name: 'System Administrator',
      role: Role.ADMIN,
      phone: '0000000000',
    },
  });
  console.log('✅ Admin Created: admin@civic.com / admin123');

  // ✅ B. PILOT OFFICER (FIXED)
  // We now link Ward and Department DIRECTLY to the User
  const officerEmail = 'officer@civic.com'; 
  
  await prisma.user.upsert({
    where: { email: officerEmail },
    update: { 
        role: Role.OFFICER, 
        password: 'officer123',
        wardId: ward.id,      // Update link if changed
        departmentId: pwd.id  // Update link if changed
    },
    create: { 
      email: officerEmail, 
      password: 'officer123',
      name: 'Pilot Officer', 
      role: Role.OFFICER,
      phone: '1111111111',
      // 👇 DIRECT LINKING (No separate Officer table needed)
      wardId: ward.id,
      departmentId: pwd.id,
    },
  });
  console.log('✅ Officer Created: officer@civic.com / officer123');

  console.log('✅ Seed complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });