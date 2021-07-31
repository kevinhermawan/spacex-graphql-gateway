import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { StarlinksResolver } from '../starlinks.resolver';
import { StarlinksService } from '../starlinks.service';

describe('StarlinksResolver', () => {
  let resolver: StarlinksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [StarlinksResolver, StarlinksService],
    }).compile();

    resolver = module.get<StarlinksResolver>(StarlinksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
