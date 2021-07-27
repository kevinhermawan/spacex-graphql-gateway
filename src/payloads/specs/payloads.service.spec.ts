import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { PayloadsService } from '../payloads.service';

describe('PayloadsService', () => {
  let service: PayloadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [PayloadsService],
    }).compile();

    service = module.get<PayloadsService>(PayloadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
