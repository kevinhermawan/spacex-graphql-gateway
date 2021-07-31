import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { PayloadsResolver } from '../payloads.resolver';
import { PayloadsService } from '../payloads.service';

describe('PayloadsResolver', () => {
  let resolver: PayloadsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [PayloadsResolver, PayloadsService],
    }).compile();

    resolver = module.get<PayloadsResolver>(PayloadsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
