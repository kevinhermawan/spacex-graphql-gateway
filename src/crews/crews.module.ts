import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { CrewsResolver } from './crews.resolver';
import { CrewsService } from './crews.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [CrewsResolver, CrewsService],
})
export class CrewsModule {}
