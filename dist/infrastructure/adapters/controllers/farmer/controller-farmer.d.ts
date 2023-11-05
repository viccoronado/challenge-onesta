import { FarmersService } from '../../../../application/service/farmer/service-farmer';
import { Farmer } from '../../../../domain/farmer';
export declare class FarmersController {
    private readonly farmersService;
    constructor(farmersService: FarmersService);
    create(name: string, email: string): Promise<Farmer>;
}
