import { Repository } from 'typeorm';
import { Fruit } from '../../../domain/fruit';
import { Variety } from '../../../domain/variety';
export declare class FruitsService {
    private readonly fruitRepository;
    private readonly varietyRepository;
    constructor(fruitRepository: Repository<Fruit>, varietyRepository: Repository<Variety>);
    createFruit(name: string): Promise<Fruit>;
    createVariety(fruitId: number, name: string): Promise<Variety>;
}
