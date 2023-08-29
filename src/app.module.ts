import { Module } from '@nestjs/common';

import { JobModule } from './jobs/job.module';

@Module({
  imports: [JobModule],
})
export class AppModule {}
