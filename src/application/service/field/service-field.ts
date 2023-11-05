import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Farmer } from 'src/domain/farmer';
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
    const field = this.createFieldEntity(name, location, farmer);
    return this.saveField(field);
  }

  private createFieldEntity(name: string, location: string, farmer: Farmer): Field {
    return this.fieldRepository.create({ name, location, farmer });
  }

  private saveField(field: Field): Promise<Field> {
    return this.fieldRepository.save(field);
  }
}
