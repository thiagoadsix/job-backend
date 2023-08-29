import { Controller, Get, Query } from '@nestjs/common';

import { JobService } from './services/job.service';
import {
  FindJobsServiceContractRequest,
  FindJobsServiceContractResponse,
} from './services/contracts';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {
    this.jobService = jobService;
  }

  @Get('search')
  async search(
    @Query() query: FindJobsServiceContractRequest,
  ): Promise<Array<FindJobsServiceContractResponse>> {
    const response = await this.jobService.findJobs(query);

    return response;
  }
}
