import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  Unique,
} from 'typeorm';
import { Fruit } from './fruit';

@Entity()
@Unique(['name', 'fruitId'])
export class Variety {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Fruit, (fruit) => fruit.varieties)
  fruits: Fruit[];
}
