import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Payload } from './entities/payload.entity';

@Injectable()
export class PayloadsService {
  constructor(private httpService: HttpService) {}

  findAll() {
    const data = this.httpService
      .get<Payload[]>('/payloads')
      .pipe(map((res) => res.data));

    return data;
  }

  findOne(id: string) {
    const data = this.httpService
      .get<Payload>(`/payloads/${id}`)
      .pipe(map((res) => res.data));

    return data;
  }
}
