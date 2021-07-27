import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { ShipsResolver } from './ships.resolver';
import { ShipsService } from './ships.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [ShipsResolver, ShipsService],
})
export class ShipsModule {}
