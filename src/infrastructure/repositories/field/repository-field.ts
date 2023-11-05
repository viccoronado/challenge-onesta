import { EntityRepository, Repository } from 'typeorm';
import { Field } from '../../../domain/field';

@EntityRepository(Field)
export class FieldRepository extends Repository<Field> {}
