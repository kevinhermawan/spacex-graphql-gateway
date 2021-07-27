import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { RoadsterResolver } from './roadster.resolver';
import { RoadsterService } from './roadster.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [RoadsterResolver, RoadsterService],
})
export class RoadsterModule {}
