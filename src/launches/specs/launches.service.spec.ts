import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { LaunchesService } from '../launches.service';

describe('LaunchesService', () => {
  let service: LaunchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [LaunchesService],
    }).compile();

    service = module.get<LaunchesService>(LaunchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
