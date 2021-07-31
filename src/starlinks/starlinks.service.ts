import * as camelcaseKeys from 'camelcase-keys';
import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Starlink } from './entities/starlink.entity';

@Injectable()
export class StarlinksService {
  constructor(private httpService: HttpService) {}

  findAll() {
    const data = this.httpService.get<Starlink[]>('/starlink').pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data)),
      map((data) => {
        return data.map((d) => ({
          ...d,
          spaceTrack: {
            ...d.spaceTrack,
            ...camelcaseKeys({
              heightKm: d.heightKm,
              velocityKms: d.velocityKms,
            }),
          },
        }));
      }),
    );

    return data;
  }

  findOne(id: string) {
    const data = this.httpService.get<Starlink>(`/starlink/${id}`).pipe(
      map((res) => res.data),
      map((data) => camelcaseKeys(data)),
      map((data) => {
        return {
          ...data,
          spaceTrack: {
            ...data.spaceTrack,
            ...camelcaseKeys({
              heightKm: data.heightKm,
              velocityKms: data.velocityKms,
            }),
          },
        };
      }),
    );

    return data;
  }
}
