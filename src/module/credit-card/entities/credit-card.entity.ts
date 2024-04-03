import { CardType } from "src/module/card-type/entities/card-type.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class TCC {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastDigits: number;

  @Column()
  bankName: string;

  @Column()
  limit: number;

  @Column()
  VenDate: Date;

  @Column()
  CloseDate: Date;

  @ManyToOne(() => CardType, cardType => cardType)
  cardType: CardType;
  @Column()
  userAuthTokenId: string;
}