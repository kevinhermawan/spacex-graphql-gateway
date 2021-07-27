import { map } from 'rxjs/operators';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(private httpService: HttpService) {}

  find() {
    const data = this.httpService
      .get<Company>('/company')
      .pipe(map((res) => res.data));

    return data;
  }
}
