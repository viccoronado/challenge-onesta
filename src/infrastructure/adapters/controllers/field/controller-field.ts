import { Controller, Post, Body, Param } from '@nestjs/common';
import { FieldsService } from '../../../../application/service/field/service-field';
import { Field } from '../../../../domain/field';
import { Farmer } from '../../../../domain/farmer';

@Controller('fields')
export class FieldsController {
  constructor(private readonly fieldsService: FieldsService) {}

  @Post(':farmerId')
  async create(
    @Body('name') name: string,
    @Body('location') location: string,
    @Param('farmerId') farmerId: number,
  ): Promise<Field> {
    const farmer = new Farmer();
    farmer.id = farmerId;
    return this.fieldsService.createField(name, location, farmer);
  }
}
