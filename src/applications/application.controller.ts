import { Body, Controller, Param, Patch, Post } from '@nestjs/common';

import { ApplicationService } from './services/application.service';
import {
  ApplyApplicationContractRequest,
  ApplyApplicationContractResponse,
} from './services/contracts';

@Controller('applications')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {
    this.applicationService = applicationService;
  }

  @Post()
  async apply(
    @Body() data: ApplyApplicationContractRequest,
  ): Promise<ApplyApplicationContractResponse> {
    return await this.applicationService.apply(data);
  }

  @Patch(':id/accept')
  async accept(
    @Param('id') id: string,
  ): Promise<ApplyApplicationContractResponse> {
    return await this.applicationService.accept(id);
  }

  @Patch(':id/reject')
  async reject(
    @Param('id') id: string,
  ): Promise<ApplyApplicationContractResponse> {
    return await this.applicationService.reject(id);
  }
}
