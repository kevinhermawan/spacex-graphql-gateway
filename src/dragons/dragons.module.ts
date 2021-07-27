import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpConfigService } from '../_utils/http-config.service';
import { DragonsResolver } from './dragons.resolver';
import { DragonsService } from './dragons.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [DragonsResolver, DragonsService],
})
export class DragonsModule {}
