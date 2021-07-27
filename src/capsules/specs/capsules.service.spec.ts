import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { CapsulesService } from '../capsules.service';

describe('CapsulesService', () => {
  let service: CapsulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [CapsulesService],
    }).compile();

    service = module.get<CapsulesService>(CapsulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
