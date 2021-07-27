import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { CoresResolver } from './cores.resolver';
import { CoresService } from './cores.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [CoresResolver, CoresService],
})
export class CoresModule {}
