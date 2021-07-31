import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { LaunchpadsResolver } from '../launchpads.resolver';
import { LaunchpadsService } from '../launchpads.service';

describe('LaunchpadsResolver', () => {
  let resolver: LaunchpadsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [LaunchpadsResolver, LaunchpadsService],
    }).compile();

    resolver = module.get<LaunchpadsResolver>(LaunchpadsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
