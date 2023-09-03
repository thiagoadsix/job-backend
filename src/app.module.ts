import { Module } from '@nestjs/common';

import { JobModule } from './jobs/job.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [JobModule, PrismaModule],
})
export class AppModule {}
