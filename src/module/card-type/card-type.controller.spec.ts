import { Test, TestingModule } from '@nestjs/testing';
import { CardTypeController } from './card-type.controller';
import { CardTypeService } from './card-type.service';

describe('CardTypeController', () => {
  let controller: CardTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardTypeController],
      providers: [CardTypeService],
    }).compile();

    controller = module.get<CardTypeController>(CardTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
