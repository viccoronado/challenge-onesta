import { EntityRepository, Repository } from 'typeorm';
import { Fruit } from '../../../domain/fruit';

@EntityRepository(Fruit)
export class FruitRepository extends Repository<Fruit> {}
