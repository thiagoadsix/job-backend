import { Injectable } from '@nestjs/common';
import { EmploymentTypes } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';
import { JsearchService } from 'src/jsearch/jsearch.service';

import { JobMapper } from 'src/jobs/services/mappers';

import {
  ApplyApplicationContractRequest,
  ApplyApplicationContractResponse,
} from './contracts';
import { ApplicationMapper } from './mappers';

@Injectable()
export class ApplicationService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jsearchService: JsearchService,
  ) {
    this.prismaService = prismaService;
    this.jsearchService = jsearchService;
  }

  async apply(
    input: ApplyApplicationContractRequest,
  ): Promise<ApplyApplicationContractResponse> {
    const jobDetails = await this.jsearchService.jobDetails(input.jobId, true);
    const jobDetailsMapped = JobMapper.toGetJob(jobDetails);

    const job = await this.prismaService.jobs.create({
      data: {
        job_id: jobDetailsMapped.jobId,
        title: jobDetailsMapped.jobTitle,
        employer_name: jobDetailsMapped.employerName,
        apply_link: jobDetailsMapped.jobApplyLink,
        city: jobDetailsMapped.jobCity,
        country: jobDetailsMapped.jobCountry,
        description: jobDetailsMapped.jobDescription,
        employer_logo: jobDetailsMapped.employerLogo,
        employer_website: jobDetailsMapped.employerWebsite,
        employment_type:
          jobDetailsMapped.jobEmploymentType.toLowerCase() as EmploymentTypes,
        is_remote: jobDetailsMapped.jobIsRemote,
        max_salary: jobDetailsMapped.jobMaxSalary,
        min_salary: jobDetailsMapped.jobMinSalary,
        state: jobDetailsMapped.jobState,
        posted_at: jobDetailsMapped.jobPostedAtDatetimeUtc,
      },
    });

    const application = await this.prismaService.applications.create({
      data: {
        status: 'pending',
        job: {
          connect: {
            id: job.id,
          },
        },
        user: {
          connect: {
            id: input.userId,
          },
        },
      },
      include: {
        job: true,
        user: true,
      },
    });

    return ApplicationMapper.toCreateApplication(application);
  }

  async accept(id: string): Promise<ApplyApplicationContractResponse> {
    const application = await this.prismaService.applications.update({
      where: {
        id,
      },
      data: {
        status: 'accepted',
      },
    });

    return ApplicationMapper.toCreateApplication(application);
  }

  async reject(id: string): Promise<ApplyApplicationContractResponse> {
    const application = await this.prismaService.applications.update({
      where: {
        id,
      },
      data: {
        status: 'rejected',
      },
    });

    return ApplicationMapper.toCreateApplication(application);
  }
}
