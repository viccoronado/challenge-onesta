import { EntityRepository, Repository } from 'typeorm';
import { Variety } from '../../../domain/variety';

@EntityRepository(Variety)
export class VarietyRepository extends Repository<Variety> {}
