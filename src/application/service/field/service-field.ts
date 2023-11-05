import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Field } from '../../../domain/field';

@Injectable()
export class FieldsService {
  constructor(
    @InjectRepository(Field)
    private fieldRepository: Repository<Field>,
  ) {}

  async createField(
    name: string,
    location: string,
    farmer: Farmer,
  ): Promise<Field> {
    const field = this.fieldRepository.create({ name, location, farmer });
    return this.fieldRepository.save(field);
  }
}
