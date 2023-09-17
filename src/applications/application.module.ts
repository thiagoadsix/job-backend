import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from 'src/prisma/prisma.module';

import { ApplicationController } from './application.controller';
import { ApplicationService } from './services/application.service';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule],
  controllers: [ApplicationController],
  providers: [PrismaModule, ApplicationService],
})
export class ApplicationModule {}
