import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Variety } from './variety';
import { Fruit } from './fruit';

@Entity()
export class Crop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Variety, (variety) => variety.fruits)
  varieties: Variety[];

  @ManyToMany(() => Crop, (fruit) => fruit.fruits)
  fruits: Fruit[];
}
