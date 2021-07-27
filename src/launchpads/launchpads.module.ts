import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { LaunchpadsResolver } from './launchpads.resolver';
import { LaunchpadsService } from './launchpads.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [LaunchpadsResolver, LaunchpadsService],
})
export class LaunchpadsModule {}
