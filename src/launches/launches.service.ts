import * as camelcaseKeys from 'camelcase-keys';
import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Launch } from './entities/launch.entity';

@Injectable()
export class LaunchesService {
  constructor(private httpService: HttpService) {}

  findAll() {
    const data = this.httpService.get<Launch[]>('/launches').pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data, { deep: true })),
    );

    return data;
  }

  findAllPast() {
    const data = this.httpService.get<Launch[]>('/launches/past').pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data, { deep: true })),
    );

    return data;
  }

  findOne(id: string) {
    const data = this.httpService.get<Launch>(`/launches/${id}`).pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data, { deep: true })),
    );

    return data;
  }

  findLatest() {
    const data = this.httpService.get<Launch>('/launches/latest').pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data, { deep: true })),
    );

    return data;
  }

  findNext() {
    const data = this.httpService.get<Launch>('/launches/next').pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data, { deep: true })),
    );

    return data;
  }
}
