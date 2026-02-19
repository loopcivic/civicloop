-- CreateEnum
CREATE TYPE "SignalType" AS ENUM ('UPVOTE', 'STILL_PRESENT');

-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('WARD', 'OFFICER', 'DEPARTMENT');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "EventType" ADD VALUE 'DUPLICATE_LINKED';
ALTER TYPE "EventType" ADD VALUE 'UPVOTED';

-- AlterTable
ALTER TABLE "Complaint" ADD COLUMN     "assignedOfficerId" TEXT,
ADD COLUMN     "duplicateOfId" TEXT;

-- CreateTable
CREATE TABLE "ComplaintSignal" (
    "id" TEXT NOT NULL,
    "complaintId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "SignalType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComplaintSignal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerformanceSnapshot" (
    "id" TEXT NOT NULL,
    "entityType" "EntityType" NOT NULL,
    "entityId" TEXT NOT NULL,
    "periodMonth" TIMESTAMP(3) NOT NULL,
    "totalIssues" INTEGER NOT NULL,
    "ackP50Min" INTEGER NOT NULL,
    "ackP95Min" INTEGER NOT NULL,
    "resolveP50Min" INTEGER NOT NULL,
    "resolveP95Min" INTEGER NOT NULL,
    "resolutionRate" INTEGER NOT NULL,
    "slaBreachRate" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PerformanceSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ComplaintSignal_complaintId_createdAt_idx" ON "ComplaintSignal"("complaintId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "ComplaintSignal_complaintId_userId_type_key" ON "ComplaintSignal"("complaintId", "userId", "type");

-- CreateIndex
CREATE INDEX "PerformanceSnapshot_entityType_periodMonth_idx" ON "PerformanceSnapshot"("entityType", "periodMonth");

-- CreateIndex
CREATE UNIQUE INDEX "PerformanceSnapshot_entityType_entityId_periodMonth_key" ON "PerformanceSnapshot"("entityType", "entityId", "periodMonth");

-- CreateIndex
CREATE INDEX "Complaint_assignedOfficerId_createdAt_idx" ON "Complaint"("assignedOfficerId", "createdAt");

-- CreateIndex
CREATE INDEX "Complaint_duplicateOfId_idx" ON "Complaint"("duplicateOfId");

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_assignedOfficerId_fkey" FOREIGN KEY ("assignedOfficerId") REFERENCES "Officer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_duplicateOfId_fkey" FOREIGN KEY ("duplicateOfId") REFERENCES "Complaint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplaintSignal" ADD CONSTRAINT "ComplaintSignal_complaintId_fkey" FOREIGN KEY ("complaintId") REFERENCES "Complaint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplaintSignal" ADD CONSTRAINT "ComplaintSignal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
