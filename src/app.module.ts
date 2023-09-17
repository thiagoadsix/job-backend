import { Module } from '@nestjs/common';

import { ApplicationModule } from './applications/application.module';
import { JobModule } from './jobs/job.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [JobModule, ApplicationModule, PrismaModule],
})
export class AppModule {}
