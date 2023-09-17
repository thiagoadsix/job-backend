import { Body, Controller, Param, Patch, Post } from '@nestjs/common';

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

  @Patch(':id/accept')
  async acceptApplication(
    @Param('id') id: string,
  ): Promise<CreateApplicationContractResponse> {
    return await this.applicationService.acceptApplication(id);
  }

  @Patch(':id/reject')
  async rejectApplication(
    @Param('id') id: string,
  ): Promise<CreateApplicationContractResponse> {
    return await this.applicationService.rejectApplication(id);
  }
}
