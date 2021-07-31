import * as camelcaseKeys from 'camelcase-keys';
import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Roadster } from './entities/roadster.entity';

@Injectable()
export class RoadsterService {
  constructor(private httpService: HttpService) {}

  find() {
    const data = this.httpService.get<Roadster>('/roadster').pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data, { deep: true })),
    );

    return data;
  }
}
