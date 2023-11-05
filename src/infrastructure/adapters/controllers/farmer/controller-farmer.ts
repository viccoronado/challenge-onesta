import { Controller, Post, Body } from '@nestjs/common';
import { FarmersService } from '../../../../application/service/farmer/service-farmer';
import { Farmer } from '../../../../domain/farmer';

@Controller('farmers')
export class FarmersController {
  constructor(private readonly farmersService: FarmersService) {}

  @Post()
  async create(
    @Body('name') name: string,
    @Body('email') email: string,
  ): Promise<Farmer> {
    return this.farmersService.createFarmer(name, email);
  }
}
