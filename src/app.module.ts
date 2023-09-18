import { Module } from '@nestjs/common';

import { ApplicationModule } from './applications/application.module';
import { JobModule } from './jobs/job.module';
import { JsearchModule } from './jsearch/jsearch.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [JsearchModule, PrismaModule, ApplicationModule, JobModule],
})
export class AppModule {}
