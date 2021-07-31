import * as camelcaseKeys from 'camelcase-keys';
import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Dragon } from './entities/dragon.entity';

@Injectable()
export class DragonsService {
  constructor(private httpService: HttpService) {}

  findAll() {
    const data = this.httpService.get<Dragon[]>('/dragons').pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data, { deep: true })),
    );

    return data;
  }

  findOne(id: string) {
    const data = this.httpService.get<Dragon>(`/dragons/${id}`).pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data, { deep: true })),
    );

    return data;
  }
}
