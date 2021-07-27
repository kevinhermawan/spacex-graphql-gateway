import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from './company.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [CompanyResolver, CompanyService],
})
export class CompanyModule {}
