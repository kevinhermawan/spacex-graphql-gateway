import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Rocket } from './entities/rocket.entity';

@Injectable()
export class RocketsService {
  constructor(private httpService: HttpService) {}

  findAll() {
    const data = this.httpService
      .get<Rocket[]>('/rockets')
      .pipe(map((res) => res.data));

    return data;
  }

  findOne(id: string) {
    const data = this.httpService
      .get<Rocket>(`/rockets/${id}`)
      .pipe(map((res) => res.data));

    return data;
  }
}
