import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { JobController } from './job.controller';
import { JobService } from './services/job.service';
import { JSearchApi } from './apis/jsearch.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({
      headers: {
        'X-RapidAPI-Key': process.env.JSearchApiKey,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
    }),
  ],
  controllers: [JobController],
  providers: [JobService, JSearchApi],
})
export class JobModule {}
