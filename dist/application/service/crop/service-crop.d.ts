import { Repository } from 'typeorm';
import { Crop } from '../../..//domain/crop';
export declare class CropsService {
    private cropRepository;
    constructor(cropRepository: Repository<Crop>);
    createCrop(name: string): Promise<Crop>;
}
