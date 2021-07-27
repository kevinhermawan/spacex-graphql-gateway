import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { RoadsterResolver } from '../roadster.resolver';
import { RoadsterService } from '../roadster.service';

describe('RoadsterResolver', () => {
  let resolver: RoadsterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [RoadsterResolver, RoadsterService],
    }).compile();

    resolver = module.get<RoadsterResolver>(RoadsterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
