import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  description: string;

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  MonthDate: Date;

  @Column()
  userAuthTokenId:string;
}