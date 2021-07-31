import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { StarlinksService } from '../starlinks.service';

describe('StarlinksService', () => {
  let service: StarlinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [StarlinksService],
    }).compile();

    service = module.get<StarlinksService>(StarlinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
