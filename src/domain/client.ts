import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Farmer } from './farmer';

@Entity()
export class Client {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToOne(() => Farmer, (farmer) => farmer.clients)
  farmers: Farmer[];
}
