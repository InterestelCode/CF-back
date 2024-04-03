import { Category } from 'src/module/category/entities/category.entity';
import { TCC } from 'src/module/credit-card/entities/credit-card.entity';
import { PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

export class Outcome {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  description: string;

  @ManyToOne(() => Category, { nullable: true })
  category: Category;

  @ManyToOne(() => TCC, { nullable: true })
  creditCard: TCC;

  // Define otras relaciones según sea necesario

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  MonthDate: Date;

  @Column()
  userAuthTokenId: string;
}
