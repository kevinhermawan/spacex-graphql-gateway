import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { LandpadsService } from '../landpads.service';

describe('LandpadsService', () => {
  let service: LandpadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [LandpadsService],
    }).compile();

    service = module.get<LandpadsService>(LandpadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
