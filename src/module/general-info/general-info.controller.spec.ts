import { Test, TestingModule } from '@nestjs/testing';
import { GeneralInfoController } from './general-info.controller';
import { GeneralInfoService } from './general-info.service';

describe('GeneralInfoController', () => {
  let controller: GeneralInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneralInfoController],
      providers: [GeneralInfoService],
    }).compile();

    controller = module.get<GeneralInfoController>(GeneralInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
