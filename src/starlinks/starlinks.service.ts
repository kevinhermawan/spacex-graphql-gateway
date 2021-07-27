import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Starlink } from './entities/starlink.entity';

@Injectable()
export class StarlinksService {
  constructor(private httpService: HttpService) {}

  findAll() {
    const data = this.httpService
      .get<Starlink[]>('/starlink')
      .pipe(map((res) => res.data));

    return data;
  }

  findOne(id: string) {
    const data = this.httpService
      .get<Starlink>(`/starlink/${id}`)
      .pipe(map((res) => res.data));

    return data;
  }
}
