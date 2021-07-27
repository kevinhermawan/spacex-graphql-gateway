import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { DragonsService } from '../dragons.service';

describe('DragonsService', () => {
  let service: DragonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [DragonsService],
    }).compile();

    service = module.get<DragonsService>(DragonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
