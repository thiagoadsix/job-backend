export interface ApplyApplicationContractRequest {
  userId: string;
  jobId: string;
}

interface User {
  name: string;
  email: string;
  createdAt: Date;
}

interface Job {
  title: string;
  description: string;
  applyLink: string;
  employerName: string;
  employerWebsite: string;
  employerLogo: string;
  employmentType: string;
  isRemote: boolean;
  city: string;
  country: string;
  state: string;
  maxSalary: any;
  minSalary: any;
  postedAt: Date;
  createdAt: Date;
}

export interface ApplyApplicationContractResponse {
  id: string;
  status: string;
  appliedAt: Date;
  userId: string;
  user: User;
  jobId: string;
  job: Job;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
