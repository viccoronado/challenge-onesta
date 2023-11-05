import { Controller, Post, Body } from '@nestjs/common';
import { CropsService } from '../../../../application/service/crop/service-crop';
import { Crop } from '../../../../domain/crop';

@Controller('crops')
export class CropsController {
  constructor(private readonly cropsService: CropsService) {}

  @Post()
  async create(@Body('name') name: string): Promise<Crop> {
    return this.cropsService.createCrop(name);
  }
}
