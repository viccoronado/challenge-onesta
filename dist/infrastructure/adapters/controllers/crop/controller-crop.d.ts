import { CropsService } from '../../../../application/service/crop/service-crop';
import { Crop } from '../../../../domain/crop';
export declare class CropsController {
    private readonly cropsService;
    constructor(cropsService: CropsService);
    create(name: string): Promise<Crop>;
}
