import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardTypeService } from './card-type.service';
import { CreateCardTypeDto } from './dto/create-card-type.dto';
import { UpdateCardTypeDto } from './dto/update-card-type.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('card-type')
@Controller('card-type')
export class CardTypeController {
  constructor(private readonly cardTypeService: CardTypeService) {}

  @Post()
  create(@Body() createCardTypeDto: CreateCardTypeDto) {
    return this.cardTypeService.create(createCardTypeDto);
  }

  @Get()
  findAll() {
    return this.cardTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardTypeDto: UpdateCardTypeDto) {
    return this.cardTypeService.update(+id, updateCardTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardTypeService.remove(+id);
  }
}
