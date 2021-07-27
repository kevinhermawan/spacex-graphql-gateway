import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { CoresService } from '../cores.service';

describe('CoresService', () => {
  let service: CoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [CoresService],
    }).compile();

    service = module.get<CoresService>(CoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
