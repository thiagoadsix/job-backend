import { Module } from '@nestjs/common';
import { JsearchService } from './jsearch.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

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
  providers: [JsearchService],
  exports: [JsearchService],
})
export class JsearchModule {}
