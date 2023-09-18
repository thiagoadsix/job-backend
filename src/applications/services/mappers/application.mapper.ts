import { ApplyApplicationContractPrismaServiceOutput } from 'src/prisma/contracts';
import { ApplyApplicationContractResponse } from '../contracts';

export class ApplicationMapper {
  static toCreateApplication(
    input: ApplyApplicationContractPrismaServiceOutput,
  ): ApplyApplicationContractResponse {
    return {
      id: input.id,
      jobId: input.job_id,
      job: {
        title: input.job.title,
        description: input.job.description,
        applyLink: input.job.apply_link,
        employerName: input.job.employer_name,
        employerWebsite: input.job.employer_website,
        employerLogo: input.job.employer_logo,
        employmentType: input.job.employment_type,
        isRemote: input.job.is_remote,
        city: input.job.city,
        country: input.job.country,
        state: input.job.state,
        maxSalary: input.job.max_salary,
        minSalary: input.job.min_salary,
        postedAt: input.job.posted_at,
        createdAt: input.job.created_at,
      },
      userId: input.user_id,
      user: {
        name: input.user.name,
        email: input.user.email,
        createdAt: input.user.created_at,
      },
      appliedAt: input.applied_at,
      status: input.status,
      createdAt: input.created_at,
      updatedAt: input.updated_at,
      deletedAt: input.deleted_at,
    };
  }
}
