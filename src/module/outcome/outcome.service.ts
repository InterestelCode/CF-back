import { Injectable } from '@nestjs/common';
import { CreateOutcomeDto } from './dto/create-outcome.dto';
import { UpdateOutcomeDto } from './dto/update-outcome.dto';

@Injectable()
export class OutcomeService {
  create(createOutcomeDto: CreateOutcomeDto) {
    return 'This action adds a new outcome';
  }

  findAll() {
    return `This action returns all outcome`;
  }

  findOne(id: number) {
    return `This action returns a #${id} outcome`;
  }

  update(id: number, updateOutcomeDto: UpdateOutcomeDto) {
    return `This action updates a #${id} outcome`;
  }

  remove(id: number) {
    return `This action removes a #${id} outcome`;
  }
}
