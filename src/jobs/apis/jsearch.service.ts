import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, lastValueFrom, map } from 'rxjs';

import {
  JSearchApiContractRequest,
  JSearchApiContractResponse,
} from './contracts';

@Injectable()
export class JSearchApi {
  constructor(private readonly httpService: HttpService) {
    this.httpService = httpService;
  }

  async search(
    input: JSearchApiContractRequest,
  ): Promise<JSearchApiContractResponse> {
    const request = this.httpService
      .get<JSearchApiContractResponse>(
        'https://jsearch.p.rapidapi.com/search',
        {
          params: {
            ...input,
          },
        },
      )
      .pipe(map((res: AxiosResponse<JSearchApiContractResponse>) => res.data))
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
