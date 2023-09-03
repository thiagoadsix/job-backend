import { CreateFilterContractPrismaServiceOutput } from 'src/prisma/contracts/filter.contract';
import { CreateFilterContractResponse } from '../contracts';

export class FilterMapper {
  static toCreateFilter(
    input: CreateFilterContractPrismaServiceOutput,
  ): CreateFilterContractResponse {
    return {
      id: input.id,
      title: input.title,
      country: input.country,
      datePosted: input.date_posted,
      employmentTypes: input.employment_types,
      jobRequirements: input.job_requirements,
      language: input.language,
      remoteJobsOnly: input.remote_jobs_only,
      createdAt: input.created_at,
      updatedAt: input.updated_at,
      deletedAt: input.deleted_at,
    };
  }
}
