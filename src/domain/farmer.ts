import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Client } from './client';
import { Field } from './field';

@Entity()
export class Farmer {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @OneToMany(() => Field, (field) => field.farmer)
  fields: Field[];

  @OneToMany(() => Client, (client) => client.farmer)
  clients: Client[];
}
