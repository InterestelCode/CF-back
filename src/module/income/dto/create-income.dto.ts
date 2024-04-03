 
import { ApiProperty } from '@nestjs/swagger';

export class CreateIncomeDto {
  @ApiProperty()
  readonly amount: number;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly MonthDate: Date;

  @ApiProperty()
  readonly userId: string;
}
