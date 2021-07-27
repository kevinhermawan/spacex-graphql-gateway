import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { CapsulesResolver } from './capsules.resolver';
import { CapsulesService } from './capsules.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [CapsulesResolver, CapsulesService],
})
export class CapsulesModule {}
