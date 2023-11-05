import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crop } from '../../..//domain/crop';

@Injectable()
export class CropsService {
  constructor(
    @InjectRepository(Crop)
    private cropRepository: Repository<Crop>,
  ) {}

  async createCrop(name: string): Promise<Crop> {
    const crop = this.cropRepository.create({ name });
    return this.cropRepository.save(crop);
  }
}
