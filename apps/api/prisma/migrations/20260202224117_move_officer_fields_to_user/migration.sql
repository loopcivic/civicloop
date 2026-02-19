/*
  Warnings:

  - You are about to drop the `Officer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_assignedOfficerId_fkey";

-- DropForeignKey
ALTER TABLE "Officer" DROP CONSTRAINT "Officer_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Officer" DROP CONSTRAINT "Officer_userId_fkey";

-- DropForeignKey
ALTER TABLE "Officer" DROP CONSTRAINT "Officer_wardId_fkey";

-- DropIndex
DROP INDEX "Ward_cityCode_name_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "departmentId" TEXT,
ADD COLUMN     "wardId" TEXT;

-- DropTable
DROP TABLE "Officer";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_wardId_fkey" FOREIGN KEY ("wardId") REFERENCES "Ward"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_assignedOfficerId_fkey" FOREIGN KEY ("assignedOfficerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
