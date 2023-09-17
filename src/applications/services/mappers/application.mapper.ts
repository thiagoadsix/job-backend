import { CreateApplicationContractPrismaServiceOutput } from 'src/prisma/contracts';
import { CreateApplicationContractResponse } from '../contracts';

export class ApplicationMapper {
  static toCreateApplication(
    input: CreateApplicationContractPrismaServiceOutput,
  ): CreateApplicationContractResponse {
    return {
      id: input.id,
      jobId: input.job_id,
      userId: input.user_id,
      appliedAt: input.applied_at,
      status: input.status,
      createdAt: input.created_at,
      updatedAt: input.updated_at,
      deletedAt: input.deleted_at,
    };
  }
}
