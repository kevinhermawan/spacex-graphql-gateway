import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { CrewsService } from '../crews.service';

describe('CrewsService', () => {
  let service: CrewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [CrewsService],
    }).compile();

    service = module.get<CrewsService>(CrewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
