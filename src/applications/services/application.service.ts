import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateApplicationContractRequest,
  CreateApplicationContractResponse,
} from './contracts';
import { ApplicationMapper } from './mappers';

@Injectable()
export class ApplicationService {
  constructor(private readonly prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  async createApplication(
    input: CreateApplicationContractRequest,
  ): Promise<CreateApplicationContractResponse> {
    const application = await this.prismaService.applications.create({
      data: {
        status: 'pending',
        job_id: input.jobId,
        user_id: input.userId,
      },
    });

    return ApplicationMapper.toCreateApplication(application);
  }
}
