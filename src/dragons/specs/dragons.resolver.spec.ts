import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { DragonsResolver } from '../dragons.resolver';
import { DragonsService } from '../dragons.service';

describe('DragonsResolver', () => {
  let resolver: DragonsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [DragonsResolver, DragonsService],
    }).compile();

    resolver = module.get<DragonsResolver>(DragonsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
