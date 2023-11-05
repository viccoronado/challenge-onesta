import { Controller, Post, Body } from '@nestjs/common';
import { ClientsService } from '../../../../application/service/client/service-client';
import { Client } from '../../../../domain/client';

@Controller('clients')
export class ClientsController {
  clientsService: any;
  constructor(private readonly customersService: ClientsService) {}

  @Post()
  async create(
    @Body('name') name: string,
    @Body('email') email: string,
  ): Promise<Client> {
    return this.clientsService.createClient(name, email);
  }
}
