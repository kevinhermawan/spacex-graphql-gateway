import * as camelcaseKeys from 'camelcase-keys';
import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Capsule } from './entities/capsule.entity';

@Injectable()
export class CapsulesService {
  constructor(private httpService: HttpService) {}

  findAll() {
    const data = this.httpService.get<Capsule[]>('/capsules').pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data, { deep: true })),
    );

    return data;
  }

  findOne(id: string) {
    const data = this.httpService.get<Capsule>(`/capsules/${id}`).pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data, { deep: true })),
    );

    return data;
  }
}
