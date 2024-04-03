import { TCC } from "src/module/credit-card/entities/credit-card.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class CardType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => TCC, tcc => tcc.cardType)
  tccs: TCC[];
}