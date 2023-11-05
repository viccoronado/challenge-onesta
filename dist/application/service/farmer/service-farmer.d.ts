import { Repository } from 'typeorm';
import { Farmer } from '../../../domain/farmer';
export declare class FarmersService {
    private farmerRepository;
    constructor(farmerRepository: Repository<Farmer>);
    createFarmer(name: string, email: string): Promise<Farmer>;
}
