import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farmer } from '../../../domain/farmer';

@Injectable()
export class FarmersService {
  constructor(
    @InjectRepository(Farmer)
    private farmerRepository: Repository<Farmer>,
  ) {}

  async createFarmer(name: string, email: string): Promise<Farmer> {
    const farmer = this.farmerRepository.create({ name, email });
    return this.farmerRepository.save(farmer);
  }
}
