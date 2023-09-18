type ApplicationStatus = 'pending' | 'accepted' | 'rejected';

export interface ApplyApplicationContractPrismaServiceInput {
  user_id: string;
  job_id: string;
}

interface UserPrisma {
  name: string;
  email: string;
  created_at: Date;
}

interface JobPrisma {
  title: string;
  description: string;
  apply_link: string;
  employer_name: string;
  employer_website: string;
  employer_logo: string;
  employment_type: string;
  is_remote: boolean;
  city: string;
  country: string;
  state: string;
  max_salary: any;
  min_salary: any;
  posted_at: Date;
  created_at: Date;
}

export interface ApplyApplicationContractPrismaServiceOutput {
  id: string;
  status: ApplicationStatus;
  user_id: string;
  user?: UserPrisma;
  job_id: string;
  job?: JobPrisma;
  applied_at: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
