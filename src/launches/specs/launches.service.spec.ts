import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { LaunchesService } from '../launches.service';

describe('LaunchesService', () => {
  let service: LaunchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [LaunchesService],
    }).compile();

    service = module.get<LaunchesService>(LaunchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
