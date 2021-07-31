import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { ShipsResolver } from '../ships.resolver';
import { ShipsService } from '../ships.service';

describe('ShipsResolver', () => {
  let resolver: ShipsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ShipsResolver, ShipsService],
    }).compile();

    resolver = module.get<ShipsResolver>(ShipsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
