import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { ShipsResolver } from '../ships.resolver';
import { ShipsService } from '../ships.service';

describe('ShipsResolver', () => {
  let resolver: ShipsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [ShipsResolver, ShipsService],
    }).compile();

    resolver = module.get<ShipsResolver>(ShipsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
