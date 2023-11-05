import { Repository } from 'typeorm';
import { Client } from '../../../domain/client';
export declare class ClientsService {
    private customerRepository;
    constructor(customerRepository: Repository<Client>);
    createCustomer(name: string, email: string): Promise<Client>;
}
