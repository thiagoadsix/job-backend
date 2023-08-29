import { Injectable } from '@nestjs/common';
import { JSearchApi } from '../apis/jsearch.service';
import {
  FindJobsServiceContractRequest,
  FindJobsServiceContractResponse,
  GetJobByIdServiceContractResponse,
} from './contracts';
import { JobMapper } from './job.mapper';

@Injectable()
export class JobService {
  constructor(private readonly jsearchApi: JSearchApi) {
    this.jsearchApi = jsearchApi;
  }

  async findJobs(
    input: FindJobsServiceContractRequest,
  ): Promise<Array<FindJobsServiceContractResponse>> {
    const jobs = await this.jsearchApi.search({
      query: input.query,
      page: input?.page,
      num_pages: input?.numPages,
      country: input?.country,
      date_posted: input?.datePosted,
      employment_requirements: input?.employmentRequirements,
      job_requirements: input?.jobRequirements,
      job_titles: input?.jobTitles,
      language: input?.language,
      remote_jobs_only: input?.remoteJobsOnly,
    });

    return JobMapper.toFindJobs(jobs);
  }

  async getJobById(
    id: string,
    extendedPublisherDetails: boolean,
  ): Promise<GetJobByIdServiceContractResponse> {
    const job = await this.jsearchApi.jobDetails(id, extendedPublisherDetails);

    return JobMapper.toGetJob(job);
  }
}
