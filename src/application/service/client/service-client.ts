import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../../../domain/client';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private customerRepository: Repository<Client>,
  ) {}

  async createCustomer(name: string, email: string): Promise<Client> {
    const client = this.customerRepository.create({ name, email });
    return this.customerRepository.save(client);
  }
}
