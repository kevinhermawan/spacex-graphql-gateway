import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { RoadsterResolver } from '../roadster.resolver';
import { RoadsterService } from '../roadster.service';

describe('RoadsterResolver', () => {
  let resolver: RoadsterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [RoadsterResolver, RoadsterService],
    }).compile();

    resolver = module.get<RoadsterResolver>(RoadsterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
