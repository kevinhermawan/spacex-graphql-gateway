import * as camelcaseKeys from 'camelcase-keys';
import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Landpad } from './entities/landpad.entity';

@Injectable()
export class LandpadsService {
  constructor(private httpService: HttpService) {}

  findAll() {
    const data = this.httpService.get<Landpad[]>('/landpads').pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data, { deep: true })),
    );

    return data;
  }

  findOne(id: string) {
    const data = this.httpService.get<Landpad>(`/landpads/${id}`).pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data, { deep: true })),
    );

    return data;
  }
}
