import { EventType, Status } from '@prisma/client';

export const StatusToEvent: Record<Status, EventType> = {
  CREATED: EventType.CREATED,
  ACKNOWLEDGED: EventType.ACKNOWLEDGED,
  ASSIGNED: EventType.ASSIGNED,
  INSPECTION: EventType.INSPECTION,
  WORK_IN_PROGRESS: EventType.WORK_STARTED,
  RESOLVED: EventType.RESOLVED,
  VERIFIED: EventType.VERIFIED,
  REOPENED: EventType.REOPENED,
};

// Allowed transitions (system-enforced)
export const AllowedTransitions: Record<Status, Status[]> = {
  CREATED: [Status.ACKNOWLEDGED],
  ACKNOWLEDGED: [Status.ASSIGNED],
  ASSIGNED: [Status.INSPECTION],
  INSPECTION: [Status.WORK_IN_PROGRESS],
  WORK_IN_PROGRESS: [Status.RESOLVED],
  RESOLVED: [Status.VERIFIED, Status.REOPENED],
  VERIFIED: [],
  REOPENED: [Status.ACKNOWLEDGED],
};
