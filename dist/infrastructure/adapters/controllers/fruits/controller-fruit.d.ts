import { FruitsService } from '../../../../application/service/fruit/service-fruit';
import { Fruit } from '../../../../domain/fruit';
import { Variety } from '../../../../domain/variety';
export declare class FruitsController {
    private readonly fruitsService;
    constructor(fruitsService: FruitsService);
    createFruit(name: string): Promise<Fruit>;
    createVariety(fruitId: number, name: string): Promise<Variety>;
}
