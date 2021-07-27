import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { RoadsterService } from '../roadster.service';

describe('RoadsterService', () => {
  let service: RoadsterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [RoadsterService],
    }).compile();

    service = module.get<RoadsterService>(RoadsterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
