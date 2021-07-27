import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { LaunchpadsService } from '../launchpads.service';

describe('LaunchpadsService', () => {
  let service: LaunchpadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [LaunchpadsService],
    }).compile();

    service = module.get<LaunchpadsService>(LaunchpadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
