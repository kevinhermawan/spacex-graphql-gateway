import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Core } from './entities/core.entity';

@Injectable()
export class CoresService {
  constructor(private httpService: HttpService) {}

  findAll() {
    const data = this.httpService
      .get<Core[]>('/cores')
      .pipe(map((res) => res.data));

    return data;
  }

  findOne(id: string) {
    const data = this.httpService
      .get<Core>(`/cores/${id}`)
      .pipe(map((res) => res.data));

    return data;
  }
}
