import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { LaunchesResolver } from '../launches.resolver';
import { LaunchesService } from '../launches.service';

describe('LaunchesResolver', () => {
  let resolver: LaunchesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [LaunchesResolver, LaunchesService],
    }).compile();

    resolver = module.get<LaunchesResolver>(LaunchesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
