/*
 Warnings:
 
 - You are about to drop the column `employment_requirements` on the `filters` table. All the data in the column will be lost.
 
 */
-- CreateEnum
CREATE TYPE "EmploymentTypes" AS ENUM ('fulltime', 'contractor', 'partime', 'intern');
-- AlterTable
ALTER TABLE "filters" DROP COLUMN "employment_requirements",
  ADD COLUMN "employment_types" "EmploymentTypes";
-- DropEnum
DROP TYPE "EmploymentRequirements";