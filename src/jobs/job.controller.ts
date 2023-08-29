import { Controller, Get, Param, Query } from '@nestjs/common';

import { JobService } from './services/job.service';
import {
  FindJobsServiceContractRequest,
  FindJobsServiceContractResponse,
  GetJobByIdServiceContractResponse,
} from './services/contracts';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {
    this.jobService = jobService;
  }

  @Get()
  async jobs(
    @Query() query: FindJobsServiceContractRequest,
  ): Promise<Array<FindJobsServiceContractResponse>> {
    const response = await this.jobService.findJobs(query);

    return response;
  }

  @Get(':id')
  async getJob(
    @Param('id') id: string,
    @Query('extendedPublisherDetails') extendedPublisherDetails: boolean,
  ): Promise<GetJobByIdServiceContractResponse> {
    const response = await this.jobService.getJobById(
      id,
      extendedPublisherDetails,
    );

    return response;
  }
}
