import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
} from 'typeorm';
import { Farmer } from './farmer';

@Entity()
@Unique(['name', 'location'])
export class Field {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  size: number;

  @ManyToOne(() => Farmer, (farmer) => farmer.fields)
  farmer: Farmer;
}
