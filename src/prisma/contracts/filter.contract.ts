type DatePosted = 'all' | 'today' | 'three_days' | 'week' | 'month';

type EmploymentTypes = 'fulltime' | 'contractor' | 'partime' | 'intern';

type JobRequirements =
  | 'under_three_years_experience'
  | 'more_than_three_years_experience'
  | 'no_experience'
  | 'no_degree';

export interface CreateFilterContractPrismaServiceInput {
  title: string;
  country: string;
  date_posted: DatePosted;
  employment_types: EmploymentTypes;
  job_requirements: JobRequirements;
  language: string;
  remote_jobs_only;
}

export interface CreateFilterContractPrismaServiceOutput {
  id: string;
  title: string;
  country: string;
  date_posted: DatePosted;
  employment_types: EmploymentTypes;
  job_requirements: JobRequirements;
  language: string;
  remote_jobs_only;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
