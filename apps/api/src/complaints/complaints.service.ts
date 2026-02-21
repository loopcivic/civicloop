// // // import { BadRequestException, Injectable } from '@nestjs/common';
// // // import { PrismaService } from '../prisma/prisma.service';
// // // import { computeEventHash } from '../common/hash';
// // // import { CreateComplaintDto } from './dto/create-complaint.dto';
// // // import { EventType, Role, Status } from '@prisma/client';
// // // import { SlaService } from '../sla/sla.service';

// // // import { AllowedTransitions, StatusToEvent } from './workflow';
// // // import { appendEvent } from './event-append';
// // // // import { EventType, Role, Status } from '@prisma/client';

// // // // import { appendEvent } from './event-append';
// // // // import { AllowedTransitions, StatusToEvent } from './workflow';
// // // // import { EventType, Role, Status } from '@prisma/client';
// // // import { haversineMeters } from '../common/geo';
// // // import { saveBase64ToUploads } from '../common/file-store';


// // // @Injectable()
// // // export class ComplaintsService {
// // //   constructor(
// // //     private prisma: PrismaService,
// // //     private sla: SlaService,
// // //   ) { }

// // //   async createComplaint(input: CreateComplaintDto) {
// // //     const citizen = await this.prisma.user.upsert({
// // //       where: { email: 'pilot-citizen@civicloop.local' },
// // //       update: {},
// // //       create: {
// // //         email: 'pilot-citizen@civicloop.local',
// // //         name: 'Pilot Citizen',
// // //         role: Role.CITIZEN,
// // //       },
// // //     });

// // //     const complaint = await this.prisma.complaint.create({
// // //       data: {
// // //         createdById: citizen.id,
// // //         title: input.title,
// // //         description: input.description,
// // //         category: input.category as any,
// // //         wardId: input.wardId,
// // //         departmentId: input.departmentId,
// // //         lat: input.lat,
// // //         lng: input.lng,
// // //         locationText: input.locationText,
// // //         currentStatus: Status.CREATED,
// // //       },
// // //     });

// // //     const createdAtISO = new Date().toISOString();
// // //     const data = {
// // //       title: input.title,
// // //       category: input.category,
// // //       wardId: input.wardId,
// // //       departmentId: input.departmentId,
// // //       lat: input.lat,
// // //       lng: input.lng,
// // //     };

// // //     const hash = computeEventHash({
// // //       complaintId: complaint.id,
// // //       type: EventType.CREATED,
// // //       createdAtISO,
// // //       data,
// // //       prevHash: null,
// // //     });

// // //     await this.prisma.complaintEvent.create({
// // //       data: {
// // //         complaintId: complaint.id,
// // //         type: EventType.CREATED,
// // //         actorUserId: citizen.id,
// // //         actorRole: Role.CITIZEN,
// // //         data,
// // //         createdAt: new Date(createdAtISO),
// // //         prevHash: null,
// // //         hash,
// // //       },
// // //     });

// // //     // ✅ schedule SLA jobs
// // //     await this.sla.scheduleForComplaint(complaint.id);

// // //     return { complaintId: complaint.id };
// // //   }

// // //   async getComplaintById(id: string) {
// // //     const complaint = await this.prisma.complaint.findUnique({
// // //       where: { id },
// // //       include: {
// // //         ward: true,
// // //         department: true,
// // //         events: { orderBy: { createdAt: 'asc' } },
// // //         media: { orderBy: { createdAt: 'asc' } },
// // //         validations: true,
// // //       },
// // //     });

// // //     if (!complaint) throw new BadRequestException('Complaint not found');

// // //     const validationCounts = complaint.validations.reduce(
// // //       (acc, v) => {
// // //         if (v.vote === 'CONFIRMED') acc.confirmed++;
// // //         else acc.notFixed++;
// // //         return acc;
// // //       },
// // //       { confirmed: 0, notFixed: 0 },
// // //     );

// // //     return {
// // //       ...complaint,
// // //       validationCounts,
// // //     };
// // //   }
// // //   async ackComplaint(complaintId: string) {
// // //     // Pilot auth stub: use demo officer
// // //     const officerUser = await this.prisma.user.findUnique({
// // //       where: { email: 'pilot-officer@civicloop.local' },
// // //     });
// // //     if (!officerUser) throw new BadRequestException('Pilot officer missing');

// // //     const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
// // //     if (!complaint) throw new BadRequestException('Complaint not found');

// // //     // Only CREATED -> ACKNOWLEDGED
// // //     if (complaint.currentStatus !== Status.CREATED) {
// // //       throw new BadRequestException(`Cannot ACK from ${complaint.currentStatus}`);
// // //     }

// // //     // Append event first (audit), then update cached status
// // //     await appendEvent({
// // //       prisma: this.prisma,
// // //       complaintId,
// // //       type: EventType.ACKNOWLEDGED,
// // //       actorUserId: officerUser.id,
// // //       actorRole: Role.OFFICER,
// // //       data: { note: 'Acknowledged by officer', at: new Date().toISOString() },
// // //     });

// // //     await this.prisma.complaint.update({
// // //       where: { id: complaintId },
// // //       data: { currentStatus: Status.ACKNOWLEDGED },
// // //     });

// // //     return { ok: true };
// // //   }

// // //   async advanceStatus(complaintId: string, nextStatus: Status, note?: string) {
// // //     const officerUser = await this.prisma.user.findUnique({
// // //       where: { email: 'pilot-officer@civicloop.local' },
// // //     });
// // //     if (!officerUser) throw new BadRequestException('Pilot officer missing');

// // //     const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
// // //     if (!complaint) throw new BadRequestException('Complaint not found');

// // //     const allowed = AllowedTransitions[complaint.currentStatus] ?? [];
// // //     if (!allowed.includes(nextStatus)) {
// // //       throw new BadRequestException(
// // //         `Invalid transition ${complaint.currentStatus} -> ${nextStatus}`,
// // //       );
// // //     }

// // //     const eventType = StatusToEvent[nextStatus];
// // //     await appendEvent({
// // //       prisma: this.prisma,
// // //       complaintId,
// // //       type: eventType,
// // //       actorUserId: officerUser.id,
// // //       actorRole: Role.OFFICER,
// // //       data: { note: note ?? null, at: new Date().toISOString() },
// // //     });

// // //     await this.prisma.complaint.update({
// // //       where: { id: complaintId },
// // //       data: { currentStatus: nextStatus },
// // //     });

// // //     return { ok: true, status: nextStatus };
// // //   }

// // //   async resolveWithProof(complaintId: string, input: { lat: number; lng: number; mediaBase64: string; note?: string; ext?: string }) {
// // //     const officerUser = await this.prisma.user.findUnique({
// // //       where: { email: 'pilot-officer@civicloop.local' },
// // //     });
// // //     if (!officerUser) throw new BadRequestException('Pilot officer missing');

// // //     const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
// // //     if (!complaint) throw new BadRequestException('Complaint not found');

// // //     // Must be WORK_IN_PROGRESS -> RESOLVED
// // //     const allowed = AllowedTransitions[complaint.currentStatus] ?? [];
// // //     if (!allowed.includes(Status.RESOLVED)) {
// // //       throw new BadRequestException(`Cannot RESOLVE from ${complaint.currentStatus}`);
// // //     }

// // //     // Geo proof: within 200m of original point
// // //     const dist = haversineMeters(
// // //       { lat: complaint.lat, lng: complaint.lng },
// // //       { lat: input.lat, lng: input.lng },
// // //     );

// // //     const maxMeters = 200;
// // //     if (dist > maxMeters) {
// // //       throw new BadRequestException(`Proof location too far: ${Math.round(dist)}m (max ${maxMeters}m)`);
// // //     }

// // //     // Save proof image
// // //     const ext = (input.ext ?? 'jpg').toLowerCase().replace('.', '');
// // //     const saved = saveBase64ToUploads(input.mediaBase64, ext);

// // //     // Store media record
// // //     const media = await this.prisma.media.create({
// // //       data: {
// // //         complaintId,
// // //         url: saved.url,
// // //         kind: 'PHOTO',
// // //         sha256: saved.sha256,
// // //         lat: input.lat,
// // //         lng: input.lng,
// // //       },
// // //     });

// // //     // Append RESOLVED event with proof
// // //     await appendEvent({
// // //       prisma: this.prisma,
// // //       complaintId,
// // //       type: EventType.RESOLVED,
// // //       actorUserId: officerUser.id,
// // //       actorRole: Role.OFFICER,
// // //       data: {
// // //         note: input.note ?? null,
// // //         proof: {
// // //           mediaId: media.id,
// // //           url: saved.url,
// // //           sha256: saved.sha256,
// // //           distMeters: Math.round(dist),
// // //         },
// // //         at: new Date().toISOString(),
// // //       },
// // //     });

// // //     await this.prisma.complaint.update({
// // //       where: { id: complaintId },
// // //       data: { currentStatus: Status.RESOLVED },
// // //     });

// // //     return { ok: true, status: Status.RESOLVED, proofUrl: saved.url };
// // //   }

// // //   async validateComplaint(complaintId: string, input: { vote: 'CONFIRMED' | 'NOT_FIXED'; note?: string; voterKey?: string; mediaBase64?: string; ext?: string }) {
// // //     // Pilot citizen identity (supports multiple voters via voterKey)
// // //     const key = (input.voterKey ?? 'default').toLowerCase();
// // //     const email = `pilot-citizen-${key}@civicloop.local`;

// // //     const voter = await this.prisma.user.upsert({
// // //       where: { email },
// // //       update: {},
// // //       create: { email, name: `Pilot Citizen ${key}`, role: Role.CITIZEN },
// // //     });

// // //     const complaint = await this.prisma.complaint.findUnique({
// // //       where: { id: complaintId },
// // //       include: { events: { orderBy: { createdAt: 'asc' } } },
// // //     });
// // //     if (!complaint) throw new BadRequestException('Complaint not found');

// // //     if (!([Status.RESOLVED] as Status[]).includes(complaint.currentStatus)) {
// // //       throw new BadRequestException(`Validation allowed only when status is RESOLVED`);
// // //     }

// // //     // Find RESOLVED event time for verification window
// // //     const resolvedEvent = complaint.events.find((e) => e.type === EventType.RESOLVED);
// // //     if (!resolvedEvent) throw new BadRequestException('No RESOLVED event found');

// // //     const resolvedAt = resolvedEvent.createdAt.getTime();
// // //     const windowMs = 48 * 3600_000;
// // //     const now = Date.now();
// // //     if (now > resolvedAt + windowMs) {
// // //       throw new BadRequestException('Verification window expired (48h)');
// // //     }

// // //     let mediaUrl: string | null = null;
// // //     if (input.mediaBase64) {
// // //       const ext = (input.ext ?? 'jpg').toLowerCase().replace('.', '');
// // //       const saved = saveBase64ToUploads(input.mediaBase64, ext);
// // //       mediaUrl = saved.url;
// // //     }

// // //     // Upsert vote (one vote per user per complaint)
// // //     await this.prisma.validation.upsert({
// // //       where: { complaintId_userId: { complaintId, userId: voter.id } },
// // //       update: { vote: input.vote as any, note: input.note ?? null, mediaUrl: mediaUrl ?? undefined },
// // //       create: {
// // //         complaintId,
// // //         userId: voter.id,
// // //         vote: input.vote as any,
// // //         note: input.note ?? null,
// // //         mediaUrl,
// // //       },
// // //     });

// // //     // Count votes
// // //     const counts = await this.prisma.validation.groupBy({
// // //       by: ['vote'],
// // //       where: { complaintId },
// // //       _count: { _all: true },
// // //     });

// // //     const confirmed = counts.find((c) => c.vote === 'CONFIRMED')?._count._all ?? 0;
// // //     const notFixed = counts.find((c) => c.vote === 'NOT_FIXED')?._count._all ?? 0;

// // //     // Auto-reopen rule: >= 3 NOT_FIXED votes during window
// // //     const threshold = 3;
// // //     if (notFixed >= threshold) {
// // //       // Append REOPENED event (immutable)
// // //       await appendEvent({
// // //         prisma: this.prisma,
// // //         complaintId,
// // //         type: EventType.REOPENED,
// // //         actorRole: Role.ADMIN,
// // //         data: { reason: 'Crowd marked NOT_FIXED', notFixed, threshold, at: new Date().toISOString() },
// // //       });

// // //       await this.prisma.complaint.update({
// // //         where: { id: complaintId },
// // //         data: { currentStatus: Status.REOPENED },
// // //       });

// // //       // Re-schedule SLA (treat as fresh cycle)
// // //       await this.sla.scheduleForComplaint(complaintId);

// // //       return { ok: true, status: Status.REOPENED, confirmed, notFixed };
// // //     }

// // //     // If enough confirmed (optional), auto-verify
// // //     const autoVerifyThreshold = 3;
// // //     if (confirmed >= autoVerifyThreshold) {
// // //       await appendEvent({
// // //         prisma: this.prisma,
// // //         complaintId,
// // //         type: EventType.VERIFIED,
// // //         actorRole: Role.ADMIN,
// // //         data: { reason: 'Crowd confirmed resolved', confirmed, at: new Date().toISOString() },
// // //       });

// // //       await this.prisma.complaint.update({
// // //         where: { id: complaintId },
// // //         data: { currentStatus: Status.VERIFIED },
// // //       });

// // //       return { ok: true, status: Status.VERIFIED, confirmed, notFixed };
// // //     }

// // //     return { ok: true, status: complaint.currentStatus, confirmed, notFixed };
// // //   }

// // // }



// // // GEMINI CODE 

// // import { saveBase64ToUploads } from '../common/file-store';
// // import { BadRequestException, Injectable } from '@nestjs/common';
// // import { PrismaService } from '../prisma/prisma.service';
// // import { computeEventHash } from '../common/hash';
// // import { CreateComplaintDto } from './dto/create-complaint.dto';
// // import { ResolveComplaintDto } from './dto/resolve-complaint.dto';
// // import { EventType, Role, Status, MediaKind } from '@prisma/client';
// // import { SlaService } from '../sla/sla.service';
// // import { AllowedTransitions, StatusToEvent } from './workflow';
// // import { appendEvent } from './event-append';
// // // ✅ FIX 1: Import the correct function that exists in your project
// // import { haversineMeters } from '../common/geo';

// // import { AssignService } from '../assign/assign.service';


// // @Injectable()
// // export class ComplaintsService {
// //   constructor(
// //     private prisma: PrismaService,
// //     private sla: SlaService,
// //     private assign: AssignService
// //   ) { }

// //   // ✅ ADD THIS MISSING METHOD   // temporarily assigning god mode for officers
// //   // async findAll() {
// //   //   return this.prisma.complaint.findMany({
// //   //     include: {
// //   //       ward: true,       // Get Ward names
// //   //       department: true, // Get Dept names
// //   //     },
// //   //     orderBy: {
// //   //       createdAt: 'desc', // Show newest first
// //   //     },
// //   //   });
// //   // }

// //   // private async flagDuplicateIfAny(complaintId: string) {
// //   //   const c = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
// //   //   if (!c) return;

// //   //   // find another complaint with same category+ward within last 6 hours and within 150m
// //   //   const since = new Date(Date.now() - 6 * 3600_000);

// //   //   const candidates = await this.prisma.complaint.findMany({
// //   //     where: {
// //   //       id: { not: complaintId },
// //   //       wardId: c.wardId,
// //   //       category: c.category,
// //   //       createdAt: { gte: since },
// //   //     },
// //   //     select: { id: true, lat: true, lng: true, createdAt: true },
// //   //     take: 50,
// //   //   });

// //   //   const maxMeters = 150;
// //   //   // const { haversineMeters } = await import('../common/geo');

// //   //   const near = candidates.find(x => haversineMeters({ lat: c.lat, lng: c.lng }, { lat: x.lat, lng: x.lng }) <= maxMeters);
// //   //   if (!near) return;

// //   //   await appendEvent({
// //   //     prisma: this.prisma,
// //   //     complaintId,
// //   //     type: EventType.DUPLICATE_FLAGGED,
// //   //     actorRole: Role.ADMIN,
// //   //     data: {
// //   //       suspectedDuplicateOf: near.id,
// //   //       withinMeters: maxMeters,
// //   //       windowHours: 6,
// //   //       at: new Date().toISOString(),
// //   //     },
// //   //   });
// //   // }


// //   // async createComplaint(input: CreateComplaintDto, citizenUserId: string) {
// //   //   // const citizen = await this.prisma.user.upsert(
// //   //   //   {

// //   //   //   where: { email: 'pilot-citizen@civicloop.local' },
// //   //   //   update: {},
// //   //   //   create: {
// //   //   //     email: 'pilot-citizen@civicloop.local',
// //   //   //     name: 'Pilot Citizen',
// //   //   //     role: Role.CITIZEN,
// //   //   //   },
// //   //   // });

// //   //   const complaint = await this.prisma.complaint.create({
// //   //     data: {
// //   //       createdById: citizenUserId,
// //   //       title: input.title,
// //   //       description: input.description,
// //   //       category: input.category as any,
// //   //       wardId: input.wardId,
// //   //       departmentId: input.departmentId,
// //   //       lat: input.lat,
// //   //       lng: input.lng,
// //   //       locationText: input.locationText,
// //   //       currentStatus: Status.CREATED,
// //   //     },
// //   //   });

// //   //   await this.flagDuplicateIfAny(complaint.id);

// //   //   const createdAtISO = new Date().toISOString();
// //   //   const data = {
// //   //     title: input.title,
// //   //     category: input.category,
// //   //     wardId: input.wardId,
// //   //     departmentId: input.departmentId,
// //   //     lat: input.lat,
// //   //     lng: input.lng,
// //   //   };

// //   //   const hash = computeEventHash({
// //   //     complaintId: complaint.id,
// //   //     type: EventType.CREATED,
// //   //     createdAtISO,
// //   //     data,
// //   //     prevHash: null,
// //   //   });

// //   //   await this.prisma.complaintEvent.create({
// //   //     data: {
// //   //       complaintId: complaint.id,
// //   //       type: EventType.CREATED,
// //   //       actorUserId: citizenUserId,
// //   //       actorRole: Role.CITIZEN,
// //   //       data,
// //   //       createdAt: new Date(createdAtISO),
// //   //       prevHash: null,
// //   //       hash,
// //   //     },
// //   //   });

// //   //   await this.sla.scheduleForComplaint(complaint.id);

// //   //   return { complaintId: complaint.id };
// //   // }

// //   // async getComplaintById(id: string) {
// //   //   const complaint = await this.prisma.complaint.findUnique({
// //   //     where: { id },
// //   //     include: {
// //   //       ward: true,
// //   //       department: true,
// //   //       events: { orderBy: { createdAt: 'asc' } },
// //   //       media: { orderBy: { createdAt: 'asc' } },
// //   //       validations: true,
// //   //     },
// //   //   });

// //   //   if (!complaint) throw new BadRequestException('Complaint not found');

// //   //   const validationCounts = complaint.validations.reduce(
// //   //     (acc, v) => {
// //   //       if (v.vote === 'CONFIRMED') acc.confirmed++;
// //   //       else acc.notFixed++;
// //   //       return acc;
// //   //     },
// //   //     { confirmed: 0, notFixed: 0 },
// //   //   );

// //   //   return { ...complaint, validationCounts };
// //   // }
// //     // In apps/api/src/complaint/complaint.service.ts

// //   async findAll(user: any) {
// //     // If Citizen, show only their own (KEEP THIS)
// //     if (user.role === 'CITIZEN') {
// //       return this.prisma.complaint.findMany({
// //         where: { createdById: user.id },
// //         orderBy: { createdAt: 'desc' },
// //         include: { validations: true },
// //       });
// //     }

// //     // If Officer/Admin, SHOW EVERYTHING (Remove filters for now)
// //     return this.prisma.complaint.findMany({
// //       // where: { wardId: ... }  <-- DELETE or COMMENT OUT this filter logic
// //       orderBy: { createdAt: 'desc' },
// //       include: { validations: true },
// //     });
// //   }

// //   // ✅ FIX 2: Renamed to 'ackComplaint' to match your Controller
// //   async ackComplaint(complaintId: string, officerUserId: string) {
// //     // const officerUser = await this.prisma.user.findUnique({
// //     //   where: { email: 'pilot-officer@civicloop.local' },
// //     // });
// //     // if (!officerUser) throw new BadRequestException('Pilot officer missing');
// //     const officerUser = await this.prisma.user.findUnique({
// //       where: { id: officerUserId },
// //     });
// //     if (!officerUser) throw new BadRequestException('Officer not found');


// //     const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
// //     if (!complaint) throw new BadRequestException('Complaint not found');

// //     if (complaint.currentStatus !== Status.CREATED) {
// //       throw new BadRequestException(`Cannot ACK from ${complaint.currentStatus}`);
// //     }

// //     await appendEvent({
// //       prisma: this.prisma,
// //       complaintId,
// //       type: EventType.ACKNOWLEDGED,
// //       actorUserId: officerUserId,
// //       actorRole: Role.OFFICER,
// //       data: { note: 'Acknowledged by officer', at: new Date().toISOString() },
// //     });

// //     const picked = await this.assign.pickOfficer(
// //       complaint.wardId,
// //       complaint.departmentId
// //     );

// //     if (picked) {
// //       await this.prisma.complaint.update({
// //         where: { id: complaintId },
// //         data: {
// //           assignedOfficerId: picked,
// //           currentStatus: Status.ACKNOWLEDGED
// //         },
// //       });

// //       await appendEvent({
// //         prisma: this.prisma,
// //         complaintId,
// //         type: EventType.ASSIGNED,
// //         actorUserId: officerUserId,
// //         actorRole: Role.OFFICER,
// //         data: { assignedOfficerId: picked, at: new Date().toISOString() },
// //       });
// //     } else {
// //       // still acknowledged, but no officer available -> escalatable
// //       await this.prisma.complaint.update({
// //         where: { id: complaintId },
// //         data: { currentStatus: Status.ACKNOWLEDGED },
// //       });
// //     }


// //     await this.prisma.complaint.update({
// //       where: { id: complaintId },
// //       data: { currentStatus: Status.ACKNOWLEDGED },
// //     });
// //     // await this.prisma.complaint.update({
// //     //   where: { id: complaintId },
// //     //   data: {
// //     //     currentStatus: Status.ACKNOWLEDGED,
// //     //     assignedOfficerId: officerUserId
// //     //   },
// //     // });

// //     return { ok: true };
// //   }

// //   // ✅ FIX 3: Renamed to 'advanceStatus' to match your Controller
// //   // ✅ FIX 4: Changed 'body: any' to specific arguments to match Controller call
// //   async advanceStatus(id: string, nextStatus: any, officerUserId: string, note?: string) {
// //     const officerUser = await this.prisma.user.findUnique({
// //       where: { email: 'pilot-officer@civicloop.local' },
// //     });
// //     const officerId = officerUser ? officerUser.id : 'officer-456';

// //     const complaint = await this.prisma.complaint.findUnique({ where: { id } });
// //     if (!complaint) throw new BadRequestException('Complaint not found');

// //     const allowed = AllowedTransitions[complaint.currentStatus] ?? [];
// //     if (!allowed.includes(nextStatus)) {
// //       throw new BadRequestException(
// //         `Invalid transition ${complaint.currentStatus} -> ${nextStatus}`,
// //       );
// //     }

// //     const eventType = StatusToEvent[nextStatus];

// //     await this.prisma.complaint.update({
// //       where: { id },
// //       data: { currentStatus: nextStatus as Status },
// //     });

// //     await appendEvent({
// //       prisma: this.prisma,
// //       complaintId: id,
// //       type: eventType,
// //       actorRole: Role.OFFICER,
// //       actorUserId: officerUserId,
// //       data: {
// //         from: complaint.currentStatus,
// //         to: nextStatus,
// //         note,
// //         at: new Date().toISOString()
// //       }
// //     });

// //     return { success: true, status: nextStatus };
// //   }
// //   // ✅ EXACT NAME match for your Controller
// //   async resolveWithProof(id: string, input: any, officerUserId: string) {
// //     const complaint = await this.prisma.complaint.findUnique({ where: { id } });

// //     // Safety check
// //     if (!complaint) {
// //       // If using standard exceptions
// //       throw new BadRequestException('Complaint not found');
// //     }

// //     // 1. Save the Base64 Image (Clean helper function)
// //     const saved = saveBase64ToUploads(input.mediaBase64, 'jpg');

// //     // 2. Save to Database
// //     const media = await this.prisma.media.create({
// //       data: {
// //         complaintId: id,
// //         url: saved.url,
// //         kind: 'PHOTO',
// //         sha256: 'mock-hash',
// //         lat: input.lat,
// //         lng: input.lng,
// //       },
// //     });

// //     // 3. Update Status to RESOLVED
// //     await this.prisma.complaint.update({
// //       where: { id },
// //       data: { currentStatus: 'RESOLVED' },
// //     });

// //     // 4. Add to History (Timeline)
// //     await appendEvent({
// //       prisma: this.prisma,
// //       complaintId: id,
// //       type: EventType.RESOLVED,
// //       actorRole: Role.OFFICER,
// //       actorUserId: officerUserId,
// //       data: {
// //         note: input.note,
// //         proofUrl: saved.url,
// //         at: new Date().toISOString(),
// //       },
// //     });

// //     return { success: true, url: saved.url };
// //   }


// //   // ✅ FIX 5: Uses 'haversineMeters' correctly with object syntax
// //   async resolveComplaint(complaintId: string, input: ResolveComplaintDto) {
// //     const officerUser = await this.prisma.user.findUnique({
// //       where: { email: 'pilot-officer@civicloop.local' },
// //     });
// //     const officerId = officerUser ? officerUser.id : 'pilot-officer-id';

// //     const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
// //     if (!complaint) throw new BadRequestException('Complaint not found');

// //     const dist = haversineMeters(
// //       { lat: complaint.lat, lng: complaint.lng },
// //       { lat: input.lat, lng: input.lng }
// //     );

// //     const maxMeters = 200;
// //     if (dist > maxMeters) {
// //       throw new BadRequestException(`Proof location too far: ${Math.round(dist)}m (max ${maxMeters}m)`);
// //     }

// //     const media = await this.prisma.media.create({
// //       data: {
// //         complaintId,
// //         url: input.photoUrl,
// //         kind: MediaKind.PHOTO,
// //         sha256: 'mock-sha256',
// //         lat: input.lat,
// //         lng: input.lng,
// //       },
// //     });

// //     await this.prisma.complaint.update({
// //       where: { id: complaintId },
// //       data: { currentStatus: Status.RESOLVED },
// //     });

// //     await appendEvent({
// //       prisma: this.prisma,
// //       complaintId,
// //       type: EventType.RESOLVED,
// //       actorUserId: officerId,
// //       actorRole: Role.OFFICER,
// //       data: {
// //         note: 'Resolved with geo-proof',
// //         proof: {
// //           mediaId: media.id,
// //           url: input.photoUrl,
// //           distMeters: Math.round(dist),
// //         },
// //         at: new Date().toISOString(),
// //       },
// //     });

// //     return { ok: true, status: Status.RESOLVED, distance: dist };
// //   }

// //   async validateComplaint(complaintId: string, input: { vote: 'CONFIRMED' | 'NOT_FIXED'; note?: string; voterKey?: string }, officerUserId: string) {
// //     const key = (input.voterKey ?? 'default').toLowerCase();
// //     const email = `pilot-citizen-${key}@civicloop.local`;

// //     const voter = await this.prisma.user.upsert({
// //       where: { email },
// //       update: {},
// //       create: { email, name: `Pilot Citizen ${key}`, role: Role.CITIZEN },
// //     });

// //     const complaint = await this.prisma.complaint.findUnique({
// //       where: { id: complaintId },
// //       include: { events: { orderBy: { createdAt: 'asc' } } },
// //     });
// //     if (!complaint) throw new BadRequestException('Complaint not found');

// //     if (!([Status.RESOLVED] as Status[]).includes(complaint.currentStatus)) {
// //       throw new BadRequestException(`Validation allowed only when status is RESOLVED`);
// //     }

// //     await this.prisma.validation.upsert({
// //       where: { complaintId_userId: { complaintId, userId: voter.id } },
// //       update: { vote: input.vote as any, note: input.note ?? null },
// //       create: {
// //         complaintId,
// //         userId: voter.id,
// //         vote: input.vote as any,
// //         note: input.note ?? null,
// //       },
// //     });

// //     const counts = await this.prisma.validation.groupBy({
// //       by: ['vote'],
// //       where: { complaintId },
// //       _count: { _all: true },
// //     });

// //     const confirmed = counts.find((c) => c.vote === 'CONFIRMED')?._count._all ?? 0;
// //     const notFixed = counts.find((c) => c.vote === 'NOT_FIXED')?._count._all ?? 0;

// //     const threshold = 3;
// //     if (notFixed >= threshold) {
// //       await appendEvent({
// //         prisma: this.prisma,
// //         complaintId,
// //         type: EventType.REOPENED,
// //         actorRole: Role.ADMIN,
// //         actorUserId: officerUserId,
// //         data: { reason: 'Crowd marked NOT_FIXED', notFixed, threshold, at: new Date().toISOString() },
// //       });

// //       await this.prisma.complaint.update({
// //         where: { id: complaintId },
// //         data: { currentStatus: Status.REOPENED },
// //       });

// //       await this.sla.scheduleForComplaint(complaintId);

// //       return { ok: true, status: Status.REOPENED, confirmed, notFixed };
// //     }

// //     return { ok: true, status: complaint.currentStatus, confirmed, notFixed };
// //   }

// //   async upvote(complaintId: string, userId: string) {
// //     const c = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
// //     if (!c) throw new BadRequestException('Not found');

// //     // if this is a duplicate, upvote canonical
// //     const targetId = c.duplicateOfId ?? c.id;

// //     await this.prisma.complaintSignal.upsert({
// //       where: { complaintId_userId_type: { complaintId: targetId, userId, type: 'UPVOTE' as any } },
// //       update: {},
// //       create: { complaintId: targetId, userId, type: 'UPVOTE' as any },
// //     });

// //     await appendEvent({
// //       prisma: this.prisma,
// //       complaintId: targetId,
// //       type: EventType.UPVOTED,
// //       actorUserId: userId,
// //       actorRole: Role.CITIZEN,
// //       data: { at: new Date().toISOString() },
// //     });

// //     const total = await this.prisma.complaintSignal.count({ where: { complaintId: targetId, type: 'UPVOTE' as any } });
// //     return { ok: true, upvotes: total, complaintId: targetId };
// //   }

// //   async linkDuplicate(dupId: string, canonicalId: string, actorUserId: string, actorRole: Role) {
// //     if (dupId === canonicalId) throw new BadRequestException('Same id');
// //     const [dup, can] = await Promise.all([
// //       this.prisma.complaint.findUnique({ where: { id: dupId } }),
// //       this.prisma.complaint.findUnique({ where: { id: canonicalId } }),
// //     ]);
// //     if (!dup || !can) throw new BadRequestException('Not found');

// //     await this.prisma.complaint.update({
// //       where: { id: dupId },
// //       data: { duplicateOfId: canonicalId },
// //     });

// //     await appendEvent({
// //       prisma: this.prisma,
// //       complaintId: dupId,
// //       type: EventType.DUPLICATE_LINKED,
// //       actorUserId,
// //       actorRole,
// //       data: { canonicalId, at: new Date().toISOString() },
// //     });

// //     return { ok: true, duplicateId: dupId, canonicalId };
// //   }


// // }


// // final

// import { BadRequestException, Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { computeEventHash } from '../common/hash';
// import { CreateComplaintDto } from './dto/create-complaint.dto';
// import { ResolveComplaintDto } from './dto/resolve-complaint.dto';
// import { ValidateComplaintDto } from './dto/validate-complaint.dto'; // 👈 THIS WAS MISSING
// import { EventType, Role, Status, MediaKind } from '@prisma/client';
// import { SlaService } from '../sla/sla.service';
// import { AllowedTransitions, StatusToEvent } from './workflow';
// import { appendEvent } from './event-append';
// import { haversineMeters } from '../common/geo';
// import { saveBase64ToUploads } from '../common/file-store';
// import { AssignService } from '../assign/assign.service';
// import { ComplaintsGateway } from "./complaints.gateway";


// @Injectable()
// export class ComplaintsService {
//   constructor(
//     private prisma: PrismaService,
//     private sla: SlaService,
//     private assign: AssignService,
//     private gateway: ComplaintsGateway
//   ) { }

//   // ✅ 1. CREATE
//   async create(input: CreateComplaintDto, userId: string, files?: Express.Multer.File[]) {
//     const complaint = await this.prisma.complaint.create({
//       data: {
//         createdById: userId,
//         title: input.title,
//         description: input.description,
//         category: input.category as any,
//         wardId: input.wardId,
//         departmentId: input.departmentId,
//         lat: input.lat,
//         lng: input.lng,
//         locationText: input.locationText,
//         currentStatus: Status.CREATED,
//       },
//     });
//     // Save citizen image if provided
//     if ((input as any).mediaBase64) {
//       const saved = saveBase64ToUploads((input as any).mediaBase64, "jpg");

//       await this.prisma.media.create({
//         data: {
//           complaintId: complaint.id,
//           url: saved.url,
//           kind: MediaKind.PHOTO,
//           sha256: saved.sha256,
//           lat: input.lat,
//           lng: input.lng,
//         },
//       });
//     }


//     const createdAtISO = new Date().toISOString();
//     const data = {
//       title: input.title,
//       category: input.category,
//       wardId: input.wardId,
//       lat: input.lat,
//       lng: input.lng,
//     };

//     const hash = computeEventHash({
//       complaintId: complaint.id,
//       type: EventType.CREATED,
//       createdAtISO,
//       data,
//       prevHash: null,
//     });

//     await this.prisma.complaintEvent.create({
//       data: {
//         complaintId: complaint.id,
//         type: EventType.CREATED,
//         actorUserId: userId,
//         actorRole: Role.CITIZEN,
//         data,
//         createdAt: new Date(createdAtISO),
//         prevHash: null,
//         hash,
//       },
//     });

//     // if (file?.length) {

//     //   await this.prisma.media.createMany({
//     //     data: {
//     //       complaintId: complaint.id,
//     //       url: file.path,
//     //       kind: MediaKind.PHOTO,
//     //       sha256: file.filename,
//     //       lat: input.lat,
//     //       lng: input.lng,
//     //     },
//     //   });

//     // }

//     if (files?.length) {

//       await this.prisma.media.createMany({
//         data: files.map(file => ({
//           complaintId: complaint.id,
//           url: file.path,
//           kind: MediaKind.PHOTO,
//           sha256: file.filename,
//           lat: input.lat,
//           lng: input.lng,
//         })),
//       });

//     }



//     await this.sla.scheduleForComplaint(complaint.id);

//     return { complaintId: complaint.id };
//   }

//   // ✅ 2. FIND ALL
//   // async findAll(user: any) {
//   //   if (user.role === 'CITIZEN') {
//   //     return this.prisma.complaint.findMany({
//   //       where: { createdById: user.id },
//   //       orderBy: { createdAt: 'desc' },
//   //       include: { validations: true },
//   //     });
//   //   }

//   //   return this.prisma.complaint.findMany({
//   //     orderBy: { createdAt: 'desc' },
//   //     include: { validations: true },
//   //   });
//   // }

//   async findAll(user: any) {
//     return this.prisma.complaint.findMany({
//       orderBy: { createdAt: 'desc' },
//       include: {
//         ward: true,
//         department: true,
//         validations: true, // Include validations so citizens can see votes
//         media: true
//       },
//     });
//   }

//   // ✅ 3. FIND ONE
//   async findOne(id: string) {
//     const complaint = await this.prisma.complaint.findUnique({
//       where: { id },
//       include: {
//         ward: true,
//         department: true,
//         events: { orderBy: { createdAt: 'asc' } },
//         media: { orderBy: { createdAt: 'asc' } },
//         validations: true,
//       },
//     });

//     if (!complaint) throw new BadRequestException('Complaint not found');

//     const validationCounts = complaint.validations.reduce(
//       (acc, v) => {
//         if (v.vote === 'CONFIRMED') acc.confirmed++;
//         else acc.notFixed++;
//         return acc;
//       },
//       { confirmed: 0, notFixed: 0 },
//     );

//     return { ...complaint, validationCounts };
//   }



//   // ✅ 4. ACKNOWLEDGE
//   async ackComplaint(complaintId: string, officerUserId: string) {
//     const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
//     if (!complaint) throw new BadRequestException('Complaint not found');

//     if (complaint.currentStatus !== Status.CREATED) {
//       throw new BadRequestException(`Cannot ACK from ${complaint.currentStatus}`);
//     }

//     await appendEvent({
//       prisma: this.prisma,
//       complaintId,
//       type: EventType.ACKNOWLEDGED,
//       actorUserId: officerUserId,
//       actorRole: Role.OFFICER,
//       data: { note: 'Acknowledged by officer', at: new Date().toISOString() },
//     });

//     const pickedOfficerId = await this.assign.pickOfficer(
//       complaint.wardId,
//       complaint.departmentId
//     );

//     await this.prisma.complaint.update({
//       where: { id: complaintId },
//       data: {
//         currentStatus: Status.ACKNOWLEDGED,
//         assignedOfficerId: pickedOfficerId || undefined,
//       },
//     });

//     if (pickedOfficerId) {
//       await appendEvent({
//         prisma: this.prisma,
//         complaintId,
//         type: EventType.ASSIGNED,
//         actorUserId: officerUserId,
//         actorRole: Role.OFFICER,
//         data: { assignedOfficerId: pickedOfficerId, at: new Date().toISOString() },
//       });
//     }

//     return { ok: true, assignedTo: pickedOfficerId };
//   }

//   // ✅ 5. ADVANCE STATUS
//   async advanceStatus(id: string, nextStatus: any, officerUserId: string, note?: string) {
//     const complaint = await this.prisma.complaint.findUnique({ where: { id } });
//     if (!complaint) throw new BadRequestException('Complaint not found');

//     const allowed = AllowedTransitions[complaint.currentStatus] ?? [];
//     if (!allowed.includes(nextStatus)) {
//       throw new BadRequestException(
//         `Invalid transition ${complaint.currentStatus} -> ${nextStatus}`,
//       );
//     }

//     const eventType = StatusToEvent[nextStatus];

//     await this.prisma.complaint.update({
//       where: { id },
//       data: { currentStatus: nextStatus as Status },
//     });

//     await appendEvent({
//       prisma: this.prisma,
//       complaintId: id,
//       type: eventType,
//       actorRole: Role.OFFICER,
//       actorUserId: officerUserId,
//       data: {
//         from: complaint.currentStatus,
//         to: nextStatus,
//         note,
//         at: new Date().toISOString()
//       }
//     });

//     return { success: true, status: nextStatus };
//   }

//   // ✅ 6. RESOLVE WITH PROOF
//   // async resolveWithProof(id: string, input: any, officerUserId: string) {
//   //   const complaint = await this.prisma.complaint.findUnique({ where: { id } });
//   //   if (!complaint) throw new BadRequestException('Complaint not found');

//   //   if (input.lat && input.lng) {
//   //     const dist = haversineMeters(
//   //       { lat: complaint.lat, lng: complaint.lng },
//   //       { lat: parseFloat(input.lat), lng: parseFloat(input.lng) }
//   //     );
//   //     const maxMeters = 200;
//   //     if (dist > maxMeters) {
//   //       throw new BadRequestException(`Proof location too far: ${Math.round(dist)}m (max ${maxMeters}m)`);
//   //     }
//   //   }

//   //   const saved = saveBase64ToUploads(input.mediaBase64, 'jpg');

//   //   await this.prisma.media.create({
//   //     data: {
//   //       complaintId: id,
//   //       url: saved.url,
//   //       kind: MediaKind.PHOTO,
//   //       sha256: saved.sha256,
//   //       lat: input.lat ? parseFloat(input.lat) : null,
//   //       lng: input.lng ? parseFloat(input.lng) : null,
//   //     },
//   //   });

//   //   await this.prisma.complaint.update({
//   //     where: { id },
//   //     data: { currentStatus: Status.RESOLVED },
//   //   });

//   //   await appendEvent({
//   //     prisma: this.prisma,
//   //     complaintId: id,
//   //     type: EventType.RESOLVED,
//   //     actorRole: Role.OFFICER,
//   //     actorUserId: officerUserId,
//   //     data: {
//   //       note: input.note,
//   //       proofUrl: saved.url,
//   //       at: new Date().toISOString(),
//   //     },
//   //   });

//   //   return { success: true, url: saved.url };
//   // }

//   // ✅ FIX: Accept files array
//   // async resolveWithProof(id: string, input: any, officerUserId: string, files?: Express.Multer.File[]) {
//   //   const complaint = await this.prisma.complaint.findUnique({ where: { id } });
//   //   if (!complaint) throw new BadRequestException('Complaint not found');

//   //   if (complaint.currentStatus !== Status.WORK_IN_PROGRESS && complaint.currentStatus !== Status.REOPENED) {
//   //      throw new BadRequestException("Must be in WORK_IN_PROGRESS to resolve.");
//   //   }

//   //   // ✅ FIX: Handle Multiple Files
//   //   if (files && files.length > 0) {
//   //     const mediaData = files.map(file => ({
//   //       complaintId: id,
//   //       url: file.path,
//   //       kind: MediaKind.PHOTO,
//   //       sha256: file.filename,
//   //       lat: input.lat ? parseFloat(input.lat) : null,
//   //       lng: input.lng ? parseFloat(input.lng) : null,
//   //     }));

//   //     await this.prisma.media.createMany({ data: mediaData });
//   //   } 
//   //   // Fallback for Base64 (Optional, if you want to keep legacy support)
//   //   else if (input.mediaBase64) {
//   //      const saved = saveBase64ToUploads(input.mediaBase64, 'jpg');
//   //      await this.prisma.media.create({
//   //        data: {
//   //          complaintId: id,
//   //          url: saved.url,
//   //          kind: MediaKind.PHOTO,
//   //          sha256: saved.sha256,
//   //          lat: input.lat ? parseFloat(input.lat) : null,
//   //          lng: input.lng ? parseFloat(input.lng) : null,
//   //        },
//   //      });
//   //   }

//   //   await this.prisma.complaint.update({
//   //     where: { id },
//   //     data: { currentStatus: Status.RESOLVED },
//   //   });

//   //   // Get the URL of the first image for the event log
//   //   const proofUrl = files?.length ? `/uploads/${files[0].filename}` : null;

//   //   await appendEvent({
//   //     prisma: this.prisma,
//   //     complaintId: id,
//   //     type: EventType.RESOLVED,
//   //     actorRole: Role.OFFICER,
//   //     actorUserId: officerUserId,
//   //     data: {
//   //       note: input.note,
//   //       proofUrl: proofUrl, // ✅ Log the first proof image
//   //       at: new Date().toISOString(),
//   //     },
//   //   });

//   //   return { success: true };
//   // }

//   async resolveWithProof(id: string, input: any, officerUserId: string, files?: Express.Multer.File[]) {
//     const complaint = await this.prisma.complaint.findUnique({ where: { id } });
//     if (!complaint) throw new BadRequestException('Complaint not found');

//     if (complaint.currentStatus !== 'WORK_IN_PROGRESS' && complaint.currentStatus !== 'REOPENED') {
//       throw new BadRequestException("Must be in WORK_IN_PROGRESS to resolve.");
//     }

//     // 1. Save Media to Database (so they appear in the gallery)
//     if (files && files.length > 0) {
//       const mediaData = files.map(file => ({
//         complaintId: id,
//         url: file.path,
//         kind: MediaKind.PHOTO,
//         sha256: file.filename,
//         lat: input.lat ? parseFloat(input.lat) : null,
//         lng: input.lng ? parseFloat(input.lng) : null,
//       }));

//       await this.prisma.media.createMany({ data: mediaData });
//     }
//     // Fallback for Base64
//     else if (input.mediaBase64) {
//       const saved = saveBase64ToUploads(input.mediaBase64, 'jpg');
//       await this.prisma.media.create({
//         data: {
//           complaintId: id,
//           url: saved.url,
//           kind: MediaKind.PHOTO,
//           sha256: saved.sha256,
//           lat: input.lat ? parseFloat(input.lat) : null,
//           lng: input.lng ? parseFloat(input.lng) : null,
//         },
//       });
//     }

//     // 2. Update Status
//     await this.prisma.complaint.update({
//       where: { id },
//       data: { currentStatus: Status.RESOLVED },
//     });

//     // ✅ FIX START: Prepare the list of URLs for the Event Log
//     let proofUrls: string[] = [];

//     if (files && files.length > 0) {
//       proofUrls = files.map(f => `/uploads/${f.filename}`);
//     } else if (input.mediaBase64) {
//       // Recalculate or grab from above if utilizing fallback
//       // (Simplified for this snippet, assuming files approach is primary now)
//     }

//     // Keep 'proofUrl' (singular) for backward compatibility with older app versions
//     const proofUrl = proofUrls.length > 0 ? proofUrls[0] : null;

//     // 3. Log Event with ALL photos
//     await appendEvent({
//       prisma: this.prisma,
//       complaintId: id,
//       type: EventType.RESOLVED,
//       actorRole: Role.OFFICER,
//       actorUserId: officerUserId,
//       data: {
//         note: input.note,
//         proofUrl: proofUrl,   // Legacy support
//         proofUrls: proofUrls, // ✅ NEW: Stores ALL images here
//         at: new Date().toISOString(),
//       },
//     });
//     // ✅ FIX END

//     const updated = await this.prisma.complaint.findUnique({
//       where: { id },
//       include: {
//         ward: true,
//         department: true,
//         validations: true,
//         media: true
//       }
//     });

//     this.gateway.broadcastComplaintUpdate(updated);

//     return { success: true };

//   }

//   // apps/api/src/complaints/complaints.service.ts

//   // apps/api/src/complaints/complaints.service.ts





//   // async assignComplaintToSelf(complaintId: string, userId: string, officerName: string) {

//   //   // 1. Find the Officer Profile linked to this User
//   //   // We search the 'Officer' table for the record that belongs to this 'User'
//   //   const officerProfile = await this.prisma.officer.findFirst({
//   //     where: { userId: userId }
//   //   });

//   //   if (!officerProfile) {
//   //     throw new BadRequestException(`No Officer Profile found for User ID: ${userId}. Please contact Admin to link your account.`);
//   //   }

//   //   // 2. Fetch Complaint
//   //   const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
//   //   if (!complaint) throw new BadRequestException('Complaint not found');

//   //   // 3. Strict Protocol Check
//   //   if (complaint.currentStatus !== Status.ACKNOWLEDGED) {
//   //     throw new BadRequestException(`Strict Protocol Violation: Complaint must be ACKNOWLEDGED before Assignment.`);
//   //   }

//   //   // 4. Update Status using the CORRECT Officer ID
//   //   await this.prisma.complaint.update({
//   //     where: { id: complaintId },
//   //     data: {
//   //       currentStatus: Status.ASSIGNED,
//   //       assignedOfficerId: officerProfile.id // 👈 CORRECT: Uses Officer ID, not User ID
//   //     },
//   //   });

//   //   // 5. Log Event (User ID is fine here for the 'Actor')
//   //   await appendEvent({
//   //     prisma: this.prisma,
//   //     complaintId,
//   //     type: EventType.ASSIGNED,
//   //     actorUserId: userId,
//   //     actorRole: Role.OFFICER,
//   //     data: {
//   //       note: `${officerName} is assigned for this task`,
//   //       at: new Date().toISOString()
//   //     },
//   //   });

//   //   return { success: true, status: Status.ASSIGNED, assignedTo: officerName };
//   // }

//   // async assignComplaintToSelf(complaintId: string, userId: string, officerName: string) {

//   //   // 🔴 REMOVED: Officer Profile Lookup 
//   //   // We no longer need to search the 'Officer' table because the User ID is now the Officer ID.

//   //   // 1. Fetch Complaint
//   //   const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
//   //   if (!complaint) throw new BadRequestException('Complaint not found');

//   //   // 2. Strict Protocol Check
//   //   // (Preserved your existing Enum usage)
//   //   if (complaint.currentStatus !== Status.ACKNOWLEDGED) {
//   //     throw new BadRequestException(`Strict Protocol Violation: Complaint must be ACKNOWLEDGED before Assignment.`);
//   //   }

//   //   // 3. Update Status using the USER ID directly
//   //   await this.prisma.complaint.update({
//   //     where: { id: complaintId },
//   //     data: {
//   //       currentStatus: Status.ASSIGNED,
//   //       assignedOfficerId: userId // ✅ FIX: Directly assign the User ID
//   //     },
//   //   });

//   //   // 4. Log Event
//   //   await appendEvent({
//   //     prisma: this.prisma,
//   //     complaintId,
//   //     type: EventType.ASSIGNED,
//   //     actorUserId: userId,
//   //     actorRole: Role.OFFICER,
//   //     data: {
//   //       note: `${officerName} is assigned for this task`,
//   //       at: new Date().toISOString()
//   //     },
//   //   });

//   //   // (Preserved original return format)
//   //   return { success: true, status: Status.ASSIGNED, assignedTo: officerName };
//   // }
//   // ✅ SMART ASSIGN: Auto-acknowledges if needed
//   async assignComplaintToSelf(complaintId: string, userId: string, officerName: string) {
//     const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
//     if (!complaint) throw new BadRequestException('Complaint not found');

//     // ⚡️ AUTO-FIX: If Created, Acknowledge it first automatically
//     if (complaint.currentStatus === 'CREATED') {
//       await this.ackComplaint(complaintId, userId);
//     }

//     // Now verify it's ready for assignment
//     // (We re-fetch or assume it's ACKNOWLEDGED now)

//     await this.prisma.complaint.update({
//       where: { id: complaintId },
//       data: {
//         currentStatus: 'ASSIGNED', // Using string literal or enum Status.ASSIGNED
//         assignedOfficerId: userId
//       },
//     });

//     await appendEvent({
//       prisma: this.prisma,
//       complaintId,
//       type: 'ASSIGNED', // Using string literal or enum EventType.ASSIGNED
//       actorUserId: userId,
//       actorRole: 'OFFICER', // Using string literal or enum Role.OFFICER
//       data: {
//         note: `${officerName} accepted assignment`,
//         at: new Date().toISOString()
//       },
//     });

//     return { success: true, status: 'ASSIGNED', assignedTo: officerName };
//   }


//   // ✅ 7. VALIDATE
//   async validateComplaint(complaintId: string, input: ValidateComplaintDto, citizenUserId: string) {
//     const complaint = await this.prisma.complaint.findUnique({
//       where: { id: complaintId },
//       include: { events: { orderBy: { createdAt: 'asc' } } },
//     });
//     if (!complaint) throw new BadRequestException('Complaint not found');

//     if (complaint.currentStatus !== Status.RESOLVED) {
//       throw new BadRequestException(`Validation allowed only when status is RESOLVED`);
//     }

//     await this.prisma.validation.upsert({
//       where: { complaintId_userId: { complaintId, userId: citizenUserId } },
//       update: { vote: input.vote, note: input.note ?? null },
//       create: {
//         complaintId,
//         userId: citizenUserId,
//         vote: input.vote,
//         note: input.note ?? null,
//       },
//     });

//     const counts = await this.prisma.validation.groupBy({
//       by: ['vote'],
//       where: { complaintId },
//       _count: { _all: true },
//     });

//     const confirmed = counts.find((c) => c.vote === 'CONFIRMED')?._count._all ?? 0;
//     const notFixed = counts.find((c) => c.vote === 'NOT_FIXED')?._count._all ?? 0;

//     const threshold = 3;
//     if (notFixed >= threshold) {
//       await appendEvent({
//         prisma: this.prisma,
//         complaintId,
//         type: EventType.REOPENED,
//         actorRole: Role.ADMIN,
//         actorUserId: citizenUserId,
//         data: { reason: 'Crowd marked NOT_FIXED', notFixed, threshold, at: new Date().toISOString() },
//       });

//       await this.prisma.complaint.update({
//         where: { id: complaintId },
//         data: { currentStatus: Status.REOPENED },
//       });

//       await this.sla.scheduleForComplaint(complaintId);

//       return { ok: true, status: Status.REOPENED, confirmed, notFixed };
//     }

//     return { ok: true, status: complaint.currentStatus, confirmed, notFixed };
//   }

//   // ✅ 8. UPVOTE
//   async upvote(complaintId: string, userId: string) {
//     const c = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
//     if (!c) throw new BadRequestException('Not found');

//     const targetId = c.duplicateOfId ?? c.id;

//     await this.prisma.complaintSignal.upsert({
//       where: { complaintId_userId_type: { complaintId: targetId, userId, type: 'UPVOTE' } },
//       update: {},
//       create: { complaintId: targetId, userId, type: 'UPVOTE' },
//     });

//     await appendEvent({
//       prisma: this.prisma,
//       complaintId: targetId,
//       type: EventType.UPVOTED,
//       actorUserId: userId,
//       actorRole: Role.CITIZEN,
//       data: { at: new Date().toISOString() },
//     });

//     const total = await this.prisma.complaintSignal.count({ where: { complaintId: targetId, type: 'UPVOTE' } });
//     return { ok: true, upvotes: total, complaintId: targetId };
//   }

//   // ✅ 9. LINK DUPLICATE
//   async linkDuplicate(dupId: string, canonicalId: string, actorUserId: string, actorRole: Role) {
//     if (dupId === canonicalId) throw new BadRequestException('Same id');

//     const [dup, can] = await Promise.all([
//       this.prisma.complaint.findUnique({ where: { id: dupId } }),
//       this.prisma.complaint.findUnique({ where: { id: canonicalId } }),
//     ]);

//     if (!dup || !can) throw new BadRequestException('Not found');

//     await this.prisma.complaint.update({
//       where: { id: dupId },
//       data: { duplicateOfId: canonicalId },
//     });

//     await appendEvent({
//       prisma: this.prisma,
//       complaintId: dupId,
//       type: EventType.DUPLICATE_LINKED,
//       actorUserId,
//       actorRole,
//       data: { canonicalId, at: new Date().toISOString() },
//     });

//     return { ok: true, duplicateId: dupId, canonicalId };
//   }
// }

import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { computeEventHash } from '../common/hash';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { ResolveComplaintDto } from './dto/resolve-complaint.dto';
import { ValidateComplaintDto } from './dto/validate-complaint.dto';
import { EventType, Role, Status, MediaKind } from '@prisma/client';
import { SlaService } from '../sla/sla.service';
import { AllowedTransitions, StatusToEvent } from './workflow';
import { appendEvent } from './event-append';
import { haversineMeters } from '../common/geo';
import { saveBase64ToUploads } from '../common/file-store';
import { AssignService } from '../assign/assign.service';
import { ComplaintsGateway } from "./complaints.gateway";

@Injectable()
export class ComplaintsService {
  constructor(
    private prisma: PrismaService,
    private sla: SlaService,
    private assign: AssignService,
    private gateway: ComplaintsGateway
  ) { }

  // ✅ 1. CREATE
  async create(input: CreateComplaintDto, userId: string, files?: Express.Multer.File[]) {
    const complaint = await this.prisma.complaint.create({
      data: {
        createdById: userId,
        title: input.title,
        description: input.description,
        category: input.category as any,
        wardId: input.wardId,
        departmentId: input.departmentId,
        lat: input.lat,
        lng: input.lng,
        locationText: input.locationText,
        currentStatus: Status.CREATED,
      },
    });

    // Save citizen image if provided (Base64 fallback)
    if ((input as any).mediaBase64) {
      const saved = await saveBase64ToUploads((input as any).mediaBase64, "jpg");
      await this.prisma.media.create({
        data: {
          complaintId: complaint.id,
          url: saved.url,
          kind: MediaKind.PHOTO,
          sha256: saved.sha256,
          lat: input.lat,
          lng: input.lng,
        },
      });
    }

    const createdAtISO = new Date().toISOString();
    const data = {
      title: input.title,
      category: input.category,
      wardId: input.wardId,
      lat: input.lat,
      lng: input.lng,
    };

    const hash = computeEventHash({
      complaintId: complaint.id,
      type: EventType.CREATED,
      createdAtISO,
      data,
      prevHash: null,
    });

    await this.prisma.complaintEvent.create({
      data: {
        complaintId: complaint.id,
        type: EventType.CREATED,
        actorUserId: userId,
        actorRole: Role.CITIZEN,
        data,
        createdAt: new Date(createdAtISO),
        prevHash: null,
        hash,
      },
    });

    if (files?.length) {
      await this.prisma.media.createMany({
        data: files.map(file => ({
          complaintId: complaint.id,
          url: file.path,
          kind: MediaKind.PHOTO,
          sha256: file.filename,
          lat: input.lat,
          lng: input.lng,
        })),
      });
    }

    await this.sla.scheduleForComplaint(complaint.id);
    return { complaintId: complaint.id };
  }

  // ✅ 2. FIND ALL
  // apps/api/src/complaints/complaints.service.ts

  // ✅ 2. FIND ALL (Updated)
  async findAll(user: any) {
    return this.prisma.complaint.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        ward: true,
        department: true,
        validations: true,
        media: true,
        signals: true,
        nudges: true,
        // ✅ NEW: Include Officer Details
        assignedOfficer: {
          select: { name: true, id: true, email: true }
        }
      },
    });
  }

  // // ✅ 3. FIND ONE (Updated)
  // async findOne(id: string) {
  //   const complaint = await this.prisma.complaint.findUnique({
  //     where: { id },
  //     include: {
  //       ward: true,
  //       department: true,
  //       events: { orderBy: { createdAt: 'asc' } },
  //       media: { orderBy: { createdAt: 'asc' } },
  //       validations: true,
  //       // ✅ NEW: Include Officer Details here too
  //       assignedOfficer: {
  //         select: { name: true, id: true, email: true }
  //       }
  //     },
  //   });
  //   // ... rest of the function (validationCounts logic) ...

  //   if (!complaint) throw new BadRequestException('Complaint not found');

  //   const validationCounts = complaint.validations.reduce(
  //     (acc, v) => {
  //       if (v.vote === 'CONFIRMED') acc.confirmed++;
  //       else acc.notFixed++;
  //       return acc;
  //     },
  //     { confirmed: 0, notFixed: 0 },
  //   );

  //   return { ...complaint, validationCounts };
  // }
  // ✅ 3. FIND ONE (Updated with signals)
  async findOne(id: string) {
    const complaint = await this.prisma.complaint.findUnique({
      where: { id },
      include: {
        ward: true,
        department: true,
        events: { orderBy: { createdAt: 'asc' } },
        media: { orderBy: { createdAt: 'asc' } },
        validations: true,
        signals: true, // 👈 ✅ NEW: Fetch the community poll votes
        assignedOfficer: {
          select: { name: true, id: true, email: true }
        },
        updates: {
          include: {
            user: {
              select: { name: true, role: true } // Only fetch the name, never send passwords to frontend!
            }
          },
          orderBy: { createdAt: 'asc' }
        }

      },
    });

    if (!complaint) throw new BadRequestException('Complaint not found');

    const validationCounts = complaint.validations.reduce(
      (acc, v) => {
        if (v.vote === 'CONFIRMED') acc.confirmed++;
        else acc.notFixed++;
        return acc;
      },
      { confirmed: 0, notFixed: 0 },
    );

    return { ...complaint, validationCounts };
  }

  // ✅ 4. ACKNOWLEDGE
  async ackComplaint(complaintId: string, officerUserId: string) {
    const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
    if (!complaint) throw new BadRequestException('Complaint not found');

    if (complaint.currentStatus !== Status.CREATED) {
      throw new BadRequestException(`Cannot ACK from ${complaint.currentStatus}`);
    }

    await appendEvent({
      prisma: this.prisma,
      complaintId,
      type: EventType.ACKNOWLEDGED,
      actorUserId: officerUserId,
      actorRole: Role.OFFICER,
      data: { note: 'Acknowledged by officer', at: new Date().toISOString() },
    });

    const pickedOfficerId = await this.assign.pickOfficer(
      complaint.wardId,
      complaint.departmentId
    );

    await this.prisma.complaint.update({
      where: { id: complaintId },
      data: {
        currentStatus: Status.ACKNOWLEDGED,
        assignedOfficerId: pickedOfficerId || undefined,
      },
    });

    if (pickedOfficerId) {
      await appendEvent({
        prisma: this.prisma,
        complaintId,
        type: EventType.ASSIGNED,
        actorUserId: officerUserId,
        actorRole: Role.OFFICER,
        data: { assignedOfficerId: pickedOfficerId, at: new Date().toISOString() },
      });
    }

    return { ok: true, assignedTo: pickedOfficerId };
  }

  // ✅ 5. ADVANCE STATUS
  async advanceStatus(id: string, nextStatus: any, officerUserId: string, note?: string) {
    const complaint = await this.prisma.complaint.findUnique({ where: { id } });
    if (!complaint) throw new BadRequestException('Complaint not found');

    const allowed = AllowedTransitions[complaint.currentStatus] ?? [];
    if (!allowed.includes(nextStatus)) {
      throw new BadRequestException(
        `Invalid transition ${complaint.currentStatus} -> ${nextStatus}`,
      );
    }

    const eventType = StatusToEvent[nextStatus];

    await this.prisma.complaint.update({
      where: { id },
      data: { currentStatus: nextStatus as Status },
    });

    await appendEvent({
      prisma: this.prisma,
      complaintId: id,
      type: eventType,
      actorRole: Role.OFFICER,
      actorUserId: officerUserId,
      data: {
        from: complaint.currentStatus,
        to: nextStatus,
        note,
        at: new Date().toISOString()
      }
    });

    return { success: true, status: nextStatus };
  }

  // ✅ 6. RESOLVE WITH PROOF
  // async resolveWithProof(id: string, input: any, officerUserId: string, files?: Express.Multer.File[]) {
  //   const complaint = await this.prisma.complaint.findUnique({ where: { id } });
  //   if (!complaint) throw new BadRequestException('Complaint not found');

  //   if (complaint.currentStatus !== Status.WORK_IN_PROGRESS && complaint.currentStatus !== Status.REOPENED) {
  //     throw new BadRequestException("Must be in WORK_IN_PROGRESS to resolve.");
  //   }

  //   // 1. Save Media
  //   if (files && files.length > 0) {
  //     const mediaData = files.map(file => ({
  //       complaintId: id,
  //       url: file.path,
  //       kind: MediaKind.PHOTO,
  //       sha256: file.filename,
  //       lat: input.lat ? parseFloat(input.lat) : null,
  //       lng: input.lng ? parseFloat(input.lng) : null,
  //     }));
  //     await this.prisma.media.createMany({ data: mediaData });
  //   }
  //   else if (input.mediaBase64) {
  //     const saved = await saveBase64ToUploads(input.mediaBase64, 'jpg');
  //     await this.prisma.media.create({
  //       data: {
  //         complaintId: id,
  //         url: saved.url,
  //         kind: MediaKind.PHOTO,
  //         sha256: saved.sha256,
  //         lat: input.lat ? parseFloat(input.lat) : null,
  //         lng: input.lng ? parseFloat(input.lng) : null,
  //       },
  //     });
  //   }

  //   // 2. Update Status AND Assignee (CRITICAL FIX: Ensure credit goes to the resolver)
  //   await this.prisma.complaint.update({
  //     where: { id },
  //     data: {
  //       currentStatus: Status.RESOLVED,
  //       assignedOfficerId: officerUserId // 👈 This ensures the officer gets the credit in stats
  //     },
  //   });

  //   // Prepare URLs for event log
  //   let proofUrls: string[] = [];
  //   if (files && files.length > 0) {
  //     proofUrls = files.map(f => `/uploads/${f.filename}`);
  //   }

  //   const proofUrl = proofUrls.length > 0 ? proofUrls[0] : null;

  //   // 3. Log Event
  //   await appendEvent({
  //     prisma: this.prisma,
  //     complaintId: id,
  //     type: EventType.RESOLVED,
  //     actorRole: Role.OFFICER,
  //     actorUserId: officerUserId,
  //     data: {
  //       note: input.note,
  //       proofUrl: proofUrl,
  //       proofUrls: proofUrls,
  //       at: new Date().toISOString(),
  //     },
  //   });

  //   const updated = await this.prisma.complaint.findUnique({
  //     where: { id },
  //     include: {
  //       ward: true,
  //       department: true,
  //       validations: true,
  //       media: true
  //     }
  //   });

  //   this.gateway.broadcastComplaintUpdate(updated);

  //   return { success: true };
  // }

  // ✅ 6. RESOLVE WITH PROOF (Fixed for Cloudinary)
  async resolveWithProof(id: string, input: any, officerUserId: string, files?: Express.Multer.File[]) {
    const complaint = await this.prisma.complaint.findUnique({ where: { id } });
    if (!complaint) throw new BadRequestException('Complaint not found');

    if (complaint.currentStatus !== Status.WORK_IN_PROGRESS && complaint.currentStatus !== Status.REOPENED) {
      throw new BadRequestException("Must be in WORK_IN_PROGRESS to resolve.");
    }

    let proofUrls: string[] = [];

    // 1. Save Media & Extract Cloudinary URLs
    if (files && files.length > 0) {
      // ✅ Use file.path which contains the live Cloudinary URL
      proofUrls = files.map(f => f.path);

      const mediaData = files.map((file, idx) => ({
        complaintId: id,
        url: proofUrls[idx],
        kind: MediaKind.PHOTO,
        sha256: file.filename || file.originalname || 'cloudinary-upload',
        lat: input.lat ? parseFloat(input.lat) : null,
        lng: input.lng ? parseFloat(input.lng) : null,
      }));
      await this.prisma.media.createMany({ data: mediaData });
    }
    else if (input.mediaBase64) {
      const saved = await saveBase64ToUploads(input.mediaBase64, 'jpg');
      proofUrls = [saved.url]; // ✅ Ensure Base64 uploads are also tracked

      await this.prisma.media.create({
        data: {
          complaintId: id,
          url: saved.url,
          kind: MediaKind.PHOTO,
          sha256: saved.sha256,
          lat: input.lat ? parseFloat(input.lat) : null,
          lng: input.lng ? parseFloat(input.lng) : null,
        },
      });
    }

    // 2. Update Status AND Assignee
    await this.prisma.complaint.update({
      where: { id },
      data: {
        currentStatus: Status.RESOLVED,
        assignedOfficerId: officerUserId
      },
    });

    const proofUrl = proofUrls.length > 0 ? proofUrls[0] : null;

    // 3. Log Event
    await appendEvent({
      prisma: this.prisma,
      complaintId: id,
      type: EventType.RESOLVED,
      actorRole: Role.OFFICER,
      actorUserId: officerUserId,
      data: {
        note: input.note,
        proofUrl: proofUrl,
        proofUrls: proofUrls, // ✅ Now matches the Cloudinary URLs exactly
        at: new Date().toISOString(),
      },
    });

    const updated = await this.prisma.complaint.findUnique({
      where: { id },
      include: {
        ward: true,
        department: true,
        validations: true,
        media: true
      }
    });

    this.gateway.broadcastComplaintUpdate(updated);

    return { success: true };
  }

  // ✅ SMART ASSIGN: Auto-acknowledges if needed
  async assignComplaintToSelf(complaintId: string, userId: string, officerName: string) {
    const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
    if (!complaint) throw new BadRequestException('Complaint not found');

    // ⚡️ AUTO-FIX: If Created, Acknowledge it first automatically
    if (complaint.currentStatus === Status.CREATED) {
      await this.ackComplaint(complaintId, userId);
    }

    // Update to ASSIGNED and set the officer
    await this.prisma.complaint.update({
      where: { id: complaintId },
      data: {
        currentStatus: Status.ASSIGNED,
        assignedOfficerId: userId
      },
    });

    await appendEvent({
      prisma: this.prisma,
      complaintId,
      type: EventType.ASSIGNED,
      actorUserId: userId,
      actorRole: Role.OFFICER,
      data: {
        note: `${officerName} accepted assignment`,
        at: new Date().toISOString()
      },
    });

    return { success: true, status: Status.ASSIGNED, assignedTo: officerName };
  }

  // ✅ 7. VALIDATE
  async validateComplaint(complaintId: string, input: any, citizenUserId: string) {
    const complaint = await this.prisma.complaint.findUnique({
      where: { id: complaintId },
      include: { events: { orderBy: { createdAt: 'asc' } } },
    });

    if (!complaint) throw new BadRequestException('Complaint not found');

    if (complaint.currentStatus !== Status.RESOLVED) {
      throw new BadRequestException(`Validation allowed only when status is RESOLVED`);
    }

    // 🔥 1. GEO-FENCED WEIGHT CALCULATION 🔥
    let isLocal = false;
    let voteWeight = 1;

    // Assuming your DTO and frontend send lat/lng, and the complaint has lat/lng
    if (input.lat && input.lng && complaint.lat && complaint.lng) {
      const distanceInKm = this.calculateDistance(input.lat, input.lng, complaint.lat, complaint.lng);

      // If within 100 meters (0.1 km)
      if (distanceInKm <= 0.1) {
        isLocal = true;
        voteWeight = 2; // This vote carries DOUBLE the weight!
      }
    }

    // 2. Upsert the vote with the new weight and local flag
    await this.prisma.validation.upsert({
      where: { complaintId_userId: { complaintId, userId: citizenUserId } },
      update: {
        vote: input.vote,
        note: input.note ?? null,
        isLocal: isLocal,
        weight: voteWeight
      },
      create: {
        complaintId,
        userId: citizenUserId,
        vote: input.vote,
        note: input.note ?? null,
        isLocal: isLocal,
        weight: voteWeight
      },
    });

    // 🔥 3. AGGREGATE USING SUM INSTEAD OF COUNT 🔥
    const aggregates = await this.prisma.validation.groupBy({
      by: ['vote'],
      where: { complaintId },
      _sum: { weight: true }, // Add up the weights, don't just count the rows!
    });

    const confirmed = aggregates.find((c) => c.vote === 'CONFIRMED')?._sum.weight ?? 0;
    const notFixed = aggregates.find((c) => c.vote === 'NOT_FIXED')?._sum.weight ?? 0;

    const threshold = 3;

    // 4. Threshold trigger (unchanged, but now uses weighted score!)
    if (notFixed >= threshold) {
      await appendEvent({
        prisma: this.prisma,
        complaintId,
        type: EventType.REOPENED,
        actorRole: Role.ADMIN,
        actorUserId: citizenUserId,
        data: { reason: 'Crowd marked NOT_FIXED', notFixed, threshold, at: new Date().toISOString() },
      });

      await this.prisma.complaint.update({
        where: { id: complaintId },
        data: { currentStatus: Status.REOPENED },
      });

      await this.sla.scheduleForComplaint(complaintId);

      // Return `isLocal` so the frontend knows to show the Geo-Badge
      return { ok: true, status: Status.REOPENED, confirmed, notFixed, isLocal };
    }

    // Return `isLocal` here as well
    return { ok: true, status: complaint.currentStatus, confirmed, notFixed, isLocal };
  }

  // // ✅ 8. UPVOTE
  // async upvote(complaintId: string, userId: string) {
  //   const c = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
  //   if (!c) throw new BadRequestException('Not found');

  //   const targetId = c.duplicateOfId ?? c.id;

  //   await this.prisma.complaintSignal.upsert({
  //     where: { complaintId_userId_type: { complaintId: targetId, userId, type: 'UPVOTE' } },
  //     update: {},
  //     create: { complaintId: targetId, userId, type: 'UPVOTE' },
  //   });

  //   await appendEvent({
  //     prisma: this.prisma,
  //     complaintId: targetId,
  //     type: EventType.UPVOTED,
  //     actorUserId: userId,
  //     actorRole: Role.CITIZEN,
  //     data: { at: new Date().toISOString() },
  //   });

  //   const total = await this.prisma.complaintSignal.count({ where: { complaintId: targetId, type: 'UPVOTE' } });
  //   return { ok: true, upvotes: total, complaintId: targetId };
  // }

  // ✅ 8. TOGGLE SIGNAL (Community Poll)
  // ✅ UPGRADED: Handles new civic emojis and severity levels
  async toggleSignal(complaintId: string, userId: string, type: any, severity: number = 1) {
    const c = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
    if (!c) throw new BadRequestException('Not found');

    // Keeps your excellent duplicate handling!
    const targetId = c.duplicateOfId ?? c.id;

    // Check if the user already voted this specific option
    const existing = await this.prisma.complaintSignal.findUnique({
      where: {
        complaintId_userId_type: { complaintId: targetId, userId, type },
      },
    });

    if (existing) {
      // Toggle OFF (Remove vote)
      await this.prisma.complaintSignal.delete({ where: { id: existing.id } });
      return { ok: true, active: false, type };
    } else {
      // Toggle ON (Add vote with the new Severity level)
      await this.prisma.complaintSignal.create({
        data: { 
          complaintId: targetId, 
          userId, 
          type, 
          severity // <-- Saves the slider value!
        },
      });

      return { ok: true, active: true, type, severity };
    }
  }

  // ✅ NEW: The "Urge Action" 24hr Cooldown Logic
  async nudgeComplaint(complaintId: string, userId: string) {
    const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
    if (!complaint) throw new BadRequestException('Complaint not found');

    const targetId = complaint.duplicateOfId ?? complaint.id; // Also nudges the main duplicate!

    const existingNudge = await this.prisma.nudge.findUnique({
      where: { complaintId_userId: { complaintId: targetId, userId } }
    });

    if (existingNudge) {
      // Check if the last nudge was within 24 hours
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      
      if (existingNudge.createdAt > twentyFourHoursAgo) {
        throw new BadRequestException('You can only nudge a complaint once every 24 hours.');
      }
      
      // If it's been more than 24 hours, update the timestamp to now!
      const updatedNudge = await this.prisma.nudge.update({
        where: { id: existingNudge.id },
        data: { createdAt: new Date() }
      });
      return { ok: true, nudge: updatedNudge };
    }

    // First time nudging this complaint
    const newNudge = await this.prisma.nudge.create({
      data: { complaintId: targetId, userId }
    });

    return { ok: true, nudge: newNudge };
  }
  // ✅ 9. LINK DUPLICATE
  async linkDuplicate(dupId: string, canonicalId: string, actorUserId: string, actorRole: Role) {
    if (dupId === canonicalId) throw new BadRequestException('Same id');

    const [dup, can] = await Promise.all([
      this.prisma.complaint.findUnique({ where: { id: dupId } }),
      this.prisma.complaint.findUnique({ where: { id: canonicalId } }),
    ]);

    if (!dup || !can) throw new BadRequestException('Not found');

    await this.prisma.complaint.update({
      where: { id: dupId },
      data: { duplicateOfId: canonicalId },
    });

    await appendEvent({
      prisma: this.prisma,
      complaintId: dupId,
      type: EventType.DUPLICATE_LINKED,
      actorUserId,
      actorRole,
      data: { canonicalId, at: new Date().toISOString() },
    });

    return { ok: true, duplicateId: dupId, canonicalId };
  }

  // ✅ NEW: Save a Community Update
  async addComplaintUpdate(complaintId: string, userId: string, text: string, file?: Express.Multer.File) {
    const complaint = await this.prisma.complaint.findUnique({ where: { id: complaintId } });
    if (!complaint) throw new BadRequestException('Complaint not found');

    let mediaUrl: string | null = null;
    if (file) {
      mediaUrl = file.path; // Save the file path (Cloudinary/Local)
    }

    // Save the update to the database
    const update = await this.prisma.complaintUpdate.create({
      data: { complaintId, userId, text, mediaUrl }
    });

    // Broadcast to WebSockets so the live map/dashboard updates instantly
    const updatedComplaint = await this.findOne(complaintId);
    this.gateway.broadcastComplaintUpdate(updatedComplaint);

    return { success: true, update };
  }

  // Calculates distance in kilometers between two coordinates
  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  }
}