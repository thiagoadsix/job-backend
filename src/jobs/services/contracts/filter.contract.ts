type EmploymentTypes = 'fulltime' | 'contractor' | 'partime' | 'intern';

export type JobRequirements =
  | 'under_three_years_experience'
  | 'more_than_three_years_experience'
  | 'no_experience'
  | 'no_degree';

type DatePosted = 'all' | 'today' | 'three_days' | 'week' | 'month';

export interface CreateFilterContractRequest {
  title: string;
  remoteJobsOnly?: boolean;
  country?: string;
  language?: string;
  employmentTypes?: EmploymentTypes;
  jobRequirements?: JobRequirements;
  datePosted?: DatePosted;
}

export interface CreateFilterContractResponse {
  id: string;
  title: string;
  remoteJobsOnly?: boolean;
  country?: string;
  language?: string;
  employmentTypes?: EmploymentTypes;
  jobRequirements?: JobRequirements;
  datePosted?: DatePosted;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
