import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { LandpadsResolver } from './landpads.resolver';
import { LandpadsService } from './landpads.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [LandpadsResolver, LandpadsService],
})
export class LandpadsModule {}
