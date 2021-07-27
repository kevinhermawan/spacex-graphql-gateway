import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { StarlinksResolver } from './starlinks.resolver';
import { StarlinksService } from './starlinks.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [StarlinksResolver, StarlinksService],
})
export class StarlinksModule {}
