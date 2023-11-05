import { FieldsService } from '../../../../application/service/field/service-field';
import { Field } from '../../../../domain/field';
export declare class FieldsController {
    private readonly fieldsService;
    constructor(fieldsService: FieldsService);
    create(name: string, location: string, farmerId: number): Promise<Field>;
}
