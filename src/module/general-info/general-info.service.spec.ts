import { Test, TestingModule } from '@nestjs/testing';
import { GeneralInfoService } from './general-info.service';

describe('GeneralInfoService', () => {
  let service: GeneralInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralInfoService],
    }).compile();

    service = module.get<GeneralInfoService>(GeneralInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
