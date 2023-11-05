import { Controller, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { FruitsService } from '../../../../application/service/fruit/service-fruit';
import { Fruit } from '../../../../domain/fruit';
import { Variety } from '../../../../domain/variety';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) {}

  @Post()
  async createFruit(@Body('name') name: string): Promise<Fruit> {
    return this.fruitsService.createFruit(name);
  }

  @Post(':id/varieties')
  async createVariety(
    @Param('id', ParseIntPipe) fruitId: number,
    @Body('name') name: string,
  ): Promise<Variety> {
    return this.fruitsService.createVariety(fruitId, name);
  }
}
