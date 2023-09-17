type ApplicationStatus = 'pending' | 'accepted' | 'rejected';

export interface CreateApplicationContractPrismaServiceInput {
  user_id: string;
  job_id: string;
}

export interface CreateApplicationContractPrismaServiceOutput {
  id: string;
  status: ApplicationStatus;
  user_id: string;
  job_id: string;
  applied_at: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
