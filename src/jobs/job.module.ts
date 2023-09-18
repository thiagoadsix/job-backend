import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';
import { JsearchModule } from 'src/jsearch/jsearch.module';

import { JobService } from './services/job.service';

import { JobController } from './job.controller';

@Module({
  imports: [PrismaModule, JsearchModule],
  controllers: [JobController],
  providers: [PrismaModule, JobService, JsearchModule],
})
export class JobModule {}
