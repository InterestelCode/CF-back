import { Injectable } from '@nestjs/common';
import { CreateCardTypeDto } from './dto/create-card-type.dto';
import { UpdateCardTypeDto } from './dto/update-card-type.dto';

@Injectable()
export class CardTypeService {
  create(createCardTypeDto: CreateCardTypeDto) {
    return 'This action adds a new cardType';
  }

  findAll() {
    return `This action returns all cardType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cardType`;
  }

  update(id: number, updateCardTypeDto: UpdateCardTypeDto) {
    return `This action updates a #${id} cardType`;
  }

  remove(id: number) {
    return `This action removes a #${id} cardType`;
  }
}
