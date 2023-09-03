-- CreateEnum
CREATE TYPE "EmploymentRequirements" AS ENUM ('fulltime', 'contractor', 'partime', 'intern');

-- CreateEnum
CREATE TYPE "JobRequirements" AS ENUM ('under_three_years_experience', 'more_than_three_years_experience', 'no_experience', 'no_degree');

-- CreateEnum
CREATE TYPE "DatePosted" AS ENUM ('all', 'today', 'three_days', 'week', 'month');

-- CreateTable
CREATE TABLE "filters" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "remote_jobs_only" BOOLEAN,
    "country" TEXT,
    "language" TEXT,
    "employment_requirements" "EmploymentRequirements",
    "job_requirements" "JobRequirements",
    "date_posted" "DatePosted",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "filters_pkey" PRIMARY KEY ("id")
);
