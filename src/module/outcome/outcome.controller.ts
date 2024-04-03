import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OutcomeService } from './outcome.service';
import { CreateOutcomeDto } from './dto/create-outcome.dto';
import { UpdateOutcomeDto } from './dto/update-outcome.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('outcome')
@Controller('outcome')
export class OutcomeController {
  constructor(private readonly outcomeService: OutcomeService) {}

  @Post()
  create(@Body() createOutcomeDto: CreateOutcomeDto) {
    return this.outcomeService.create(createOutcomeDto);
  }

  @Get()
  findAll() {
    return this.outcomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.outcomeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOutcomeDto: UpdateOutcomeDto) {
    return this.outcomeService.update(+id, updateOutcomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.outcomeService.remove(+id);
  }
}
