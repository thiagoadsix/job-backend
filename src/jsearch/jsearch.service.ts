import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, lastValueFrom, map } from 'rxjs';

import {
  JobDetailsApiContractResponse,
  SearchApiContractRequest,
  SearchApiContractResponse,
} from './contracts';

@Injectable()
export class JsearchService {
  constructor(private readonly httpService: HttpService) {
    this.httpService = httpService;
  }

  async search(
    input: SearchApiContractRequest,
  ): Promise<SearchApiContractResponse> {
    const request = this.httpService
      .get<SearchApiContractResponse>('https://jsearch.p.rapidapi.com/search', {
        params: {
          ...input,
        },
      })
      .pipe(map((res: AxiosResponse<SearchApiContractResponse>) => res.data))
      .pipe(
        catchError((error) => {
          console.error({ error });
          throw new BadRequestException(
            'Erro ao fazer a requisição para a API JSearch.',
          );
        }),
      );

    const response = await lastValueFrom(request);

    return response;
  }

  async jobDetails(
    id: string,
    extendedPublisherDetails: boolean,
  ): Promise<JobDetailsApiContractResponse> {
    const request = this.httpService
      .get<JobDetailsApiContractResponse>(
        'https://jsearch.p.rapidapi.com/job-details',
        {
          params: {
            job_id: id,
            extended_publisher_details: extendedPublisherDetails,
          },
        },
      )
      .pipe(
        map((res: AxiosResponse<JobDetailsApiContractResponse>) => res.data),
      )
      .pipe(
        catchError((error) => {
          console.error({ error });
          throw new BadRequestException(
            'Erro ao fazer a requisição para a API JSearch.',
          );
        }),
      );

    const response = await lastValueFrom(request);

    return response;
  }
}
