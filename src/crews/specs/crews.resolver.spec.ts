import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { CrewsResolver } from '../crews.resolver';
import { CrewsService } from '../crews.service';

describe('CrewsResolver', () => {
  let resolver: CrewsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [CrewsResolver, CrewsService],
    }).compile();

    resolver = module.get<CrewsResolver>(CrewsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
