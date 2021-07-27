import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Ship } from './entities/ship.entity';

@Injectable()
export class ShipsService {
  constructor(private httpService: HttpService) {}

  findAll() {
    const data = this.httpService
      .get<Ship[]>('/ships')
      .pipe(map((res) => res.data));

    return data;
  }

  findOne(id: string) {
    const data = this.httpService
      .get<Ship>(`/ships/${id}`)
      .pipe(map((res) => res.data));

    return data;
  }
}
