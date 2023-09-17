/*
  Warnings:

  - You are about to drop the column `appliedAt` on the `applications` table. All the data in the column will be lost.
  - You are about to drop the column `jobId` on the `applications` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `applications` table. All the data in the column will be lost.
  - Added the required column `job_id` to the `applications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `applications` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "applications" DROP CONSTRAINT "applications_jobId_fkey";

-- DropForeignKey
ALTER TABLE "applications" DROP CONSTRAINT "applications_userId_fkey";

-- AlterTable
ALTER TABLE "applications" DROP COLUMN "appliedAt",
DROP COLUMN "jobId",
DROP COLUMN "userId",
ADD COLUMN     "applied_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "job_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
