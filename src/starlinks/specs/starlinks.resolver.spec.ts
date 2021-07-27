import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { StarlinksResolver } from '../starlinks.resolver';
import { StarlinksService } from '../starlinks.service';

describe('StarlinksResolver', () => {
  let resolver: StarlinksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [StarlinksResolver, StarlinksService],
    }).compile();

    resolver = module.get<StarlinksResolver>(StarlinksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
