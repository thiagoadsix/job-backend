import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from 'src/prisma/prisma.module';
import { JsearchModule } from 'src/jsearch/jsearch.module';

import { ApplicationController } from './application.controller';
import { ApplicationService } from './services/application.service';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, JsearchModule],
  controllers: [ApplicationController],
  providers: [PrismaModule, ApplicationService, JsearchModule],
})
export class ApplicationModule {}
