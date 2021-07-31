import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { CapsulesResolver } from '../capsules.resolver';
import { CapsulesService } from '../capsules.service';

describe('CapsulesResolver', () => {
  let resolver: CapsulesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [CapsulesResolver, CapsulesService],
    }).compile();

    resolver = module.get<CapsulesResolver>(CapsulesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
