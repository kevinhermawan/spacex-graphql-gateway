import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { RocketsService } from '../rockets.service';

describe('RocketsService', () => {
  let service: RocketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [RocketsService],
    }).compile();

    service = module.get<RocketsService>(RocketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
