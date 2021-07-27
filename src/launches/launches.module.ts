import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { LaunchesResolver } from './launches.resolver';
import { LaunchesService } from './launches.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [LaunchesResolver, LaunchesService],
})
export class LaunchesModule {}
