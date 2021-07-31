import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { SPACEX_API_URL } from '../_utils/constants/env-keys';
import { RoadsterResolver } from './roadster.resolver';
import { RoadsterService } from './roadster.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get(SPACEX_API_URL),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [RoadsterResolver, RoadsterService],
})
export class RoadsterModule {}
