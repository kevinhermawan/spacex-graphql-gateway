import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { ShipsService } from '../ships.service';

describe('ShipsService', () => {
  let service: ShipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [ShipsService],
    }).compile();

    service = module.get<ShipsService>(ShipsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
