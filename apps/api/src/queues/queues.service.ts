import { Injectable } from '@nestjs/common';
import { Queue, Worker } from 'bullmq';
import IORedis from 'ioredis';

export type CivicJob =
  | { name: 'ACK_DUE'; data: { complaintId: string } }
  | { name: 'RESOLVE_DUE'; data: { complaintId: string } };

@Injectable()
export class QueuesService {
  private connection: IORedis;
  public civicQueue: Queue;

  constructor() {
    const redisUrl = process.env.REDIS_URL ?? 'redis://localhost:6379';
    this.connection = new IORedis(redisUrl, { maxRetriesPerRequest: null });

    this.civicQueue = new Queue('civicloop', { connection: this.connection });
  }

  // helper to schedule delayed jobs
  async schedule(job: CivicJob, delayMs: number) {
    await this.civicQueue.add(job.name, job.data, {
      delay: delayMs,
      attempts: 2,
      backoff: { type: 'exponential', delay: 2000 },
      removeOnComplete: true,
      removeOnFail: false,
    });
  }

  // Worker is started in Step 3.4 (to process SLA jobs)
  createWorker(processor: (name: string, data: any) => Promise<void>) {
    return new Worker(
      'civicloop',
      async (job) => {
        await processor(job.name, job.data);
      },
      { connection: this.connection },
    );
  }
}
