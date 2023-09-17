export interface CreateApplicationContractRequest {
  userId: string;
  jobId: string;
}

export interface CreateApplicationContractResponse {
  id: string;
  status: string;
  appliedAt: Date;
  userId: string;
  jobId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
