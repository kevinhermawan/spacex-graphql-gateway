import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Crew } from './entities/crew.entity';

@Injectable()
export class CrewsService {
  constructor(private httpService: HttpService) {}

  findAll() {
    const data = this.httpService
      .get<Crew[]>('/crew')
      .pipe(map((res) => res.data));

    return data;
  }

  findOne(id: string) {
    const data = this.httpService
      .get<Crew>(`/crew/${id}`)
      .pipe(map((res) => res.data));

    return data;
  }
}
