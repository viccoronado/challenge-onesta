import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fruit } from '../../../domain/fruit';
import { Variety } from '../../../domain/variety';

@Injectable()
export class FruitsService {
  constructor(
    @InjectRepository(Fruit)
    private readonly fruitRepository: Repository<Fruit>,
    @InjectRepository(Variety)
    private readonly varietyRepository: Repository<Variety>,
  ) {}

  async createFruit(name: string): Promise<Fruit> {
    const fruit = this.fruitRepository.create({ name });
    return this.fruitRepository.save(fruit);
  }

  async createVariety(fruitId: number, name: string): Promise<Variety> {
    const fruit = await this.fruitRepository.findOne(fruitId);
    if (!fruit) {
      throw new Error('Fruit not found');
    }

    const variety = this.varietyRepository.create({ name });
    fruit.varieties.push(variety);
    await this.fruitRepository.save(fruit);

    return variety;
  }
}