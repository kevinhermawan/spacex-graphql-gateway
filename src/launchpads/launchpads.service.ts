import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Launchpad } from './entities/launchpad.entity';

@Injectable()
export class LaunchpadsService {
  constructor(private httpService: HttpService) {}

  findAll() {
    const data = this.httpService
      .get<Launchpad[]>('/launchpads')
      .pipe(map((res) => res.data));

    return data;
  }

  findOne(id: string) {
    const data = this.httpService
      .get<Launchpad>(`/launchpads/${id}`)
      .pipe(map((res) => res.data));

    return data;
  }
}
