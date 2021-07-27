import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { PayloadsResolver } from './payloads.resolver';
import { PayloadsService } from './payloads.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [PayloadsResolver, PayloadsService],
})
export class PayloadsModule {}
