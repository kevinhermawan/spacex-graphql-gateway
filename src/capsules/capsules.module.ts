import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { SPACEX_API_URL } from '../_utils/constants/env-keys';
import { CapsulesResolver } from './capsules.resolver';
import { CapsulesService } from './capsules.service';

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
  providers: [CapsulesResolver, CapsulesService],
})
export class CapsulesModule {}
