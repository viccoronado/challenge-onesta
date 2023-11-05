import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  Unique,
} from 'typeorm';
import { Variety } from './variety';

@Entity()
@Unique(['name'])
export class Fruit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Variety, (variety) => variety.fruits)
  varieties: Variety[];
}
