import crypto from 'crypto';

export function sha256(input: string) {
  return crypto.createHash('sha256').update(input).digest('hex');
}

export function computeEventHash(args: {
  complaintId: string;
  type: string;
  createdAtISO: string;
  data: unknown;
  prevHash: string | null;
}) {
  const payload = JSON.stringify({
    complaintId: args.complaintId,
    type: args.type,
    createdAt: args.createdAtISO,
    data: args.data,
    prevHash: args.prevHash,
  });
  return sha256(payload);
}
