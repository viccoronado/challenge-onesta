import { ClientsService } from '../../../../application/service/client/service-client';
import { Client } from '../../../../domain/client';
export declare class ClientsController {
    private readonly customersService;
    clientsService: any;
    constructor(customersService: ClientsService);
    create(name: string, email: string): Promise<Client>;
}
