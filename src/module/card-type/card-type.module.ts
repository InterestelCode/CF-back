import { Module } from '@nestjs/common';
import { CardTypeService } from './card-type.service';
import { CardTypeController } from './card-type.controller';

@Module({
  controllers: [CardTypeController],
  providers: [CardTypeService],
})
export class CardTypeModule {}
