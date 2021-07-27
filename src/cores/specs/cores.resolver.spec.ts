import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { CoresResolver } from '../cores.resolver';
import { CoresService } from '../cores.service';

describe('CoresResolver', () => {
  let resolver: CoresResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [CoresResolver, CoresService],
    }).compile();

    resolver = module.get<CoresResolver>(CoresResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
