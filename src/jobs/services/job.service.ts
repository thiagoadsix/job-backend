import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { JSearchApi } from '../apis/jsearch.service';

import {
  CreateFilterContractRequest,
  CreateFilterContractResponse,
  FindJobsServiceContractRequest,
  FindJobsServiceContractResponse,
  GetJobByIdServiceContractResponse,
} from './contracts';
import { FilterMapper, JobMapper } from './mappers';

@Injectable()
export class JobService {
  constructor(
    private readonly jsearchApi: JSearchApi,
    private readonly prismaService: PrismaService,
  ) {
    this.jsearchApi = jsearchApi;
    this.prismaService = prismaService;
  }

  private readonly datePosted = {};

  async findJobs(
    input: FindJobsServiceContractRequest,
  ): Promise<Array<FindJobsServiceContractResponse>> {
    const jobs = await this.jsearchApi.search({
      query: input.query,
      page: input?.page,
      num_pages: input?.numPages,
      country: input?.country,
      date_posted: input?.datePosted,
      employment_types: input?.employmentTypes,
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

  async createFilter(
    input: CreateFilterContractRequest,
  ): Promise<CreateFilterContractResponse> {
    const filter = await this.prismaService.filters.create({
      data: {
        title: input.title,
        country: input.country,
        language: input.language,
        employment_types: input.employmentTypes,
        job_requirements: input.jobRequirements,
        date_posted: input.datePosted,
        remote_jobs_only: input.remoteJobsOnly,
      },
    });

    return FilterMapper.toCreateFilter(filter);
  }
}
