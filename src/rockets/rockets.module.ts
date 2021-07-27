import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { RocketsResolver } from './rockets.resolver';
import { RocketsService } from './rockets.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [RocketsResolver, RocketsService],
})
export class RocketsModule {}
