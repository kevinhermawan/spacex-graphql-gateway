import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { LandpadsResolver } from '../landpads.resolver';
import { LandpadsService } from '../landpads.service';

describe('LandpadsResolver', () => {
  let resolver: LandpadsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [LandpadsResolver, LandpadsService],
    }).compile();

    resolver = module.get<LandpadsResolver>(LandpadsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
