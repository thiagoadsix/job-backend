import { Body, Controller, Post } from '@nestjs/common';

import { ApplicationService } from './services/application.service';
import {
  CreateApplicationContractRequest,
  CreateApplicationContractResponse,
} from './services/contracts';

@Controller('applications')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {
    this.applicationService = applicationService;
  }

  @Post()
  async createApplication(
    @Body() data: CreateApplicationContractRequest,
  ): Promise<CreateApplicationContractResponse> {
    return await this.applicationService.createApplication(data);
  }
}
