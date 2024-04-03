import { Module } from '@nestjs/common';
import { OutcomeService } from './outcome.service';
import { OutcomeController } from './outcome.controller';

@Module({
  controllers: [OutcomeController],
  providers: [OutcomeService],
})
export class OutcomeModule {}
