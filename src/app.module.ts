import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fruit } from './domain/fruit';
import { Field } from './domain/field';
import { Farmer } from './domain/farmer';
import { Variety } from './domain/variety';
import { Crop } from './domain/crop';
import { FruitsService } from './application/service/fruit/service-fruit';
import { FruitsController } from './infrastructure/adapters/controllers/fruits/controller-fruit';
import { CropsService } from './application/service/crop/service-crop';
import { CropsController } from './infrastructure/adapters/controllers/crop/controller-crop';
import { FieldsService } from './application/service/field/service-field';
import { FieldsController } from './infrastructure/adapters/controllers/field/controller-field';
import { FarmersService } from './application/service/farmer/service-farmer';
import { FarmersController } from './infrastructure/adapters/controllers/farmer/controller-farmer';
import { ClientsService } from './application/service/client/service-client';
import { ClientsController } from './infrastructure/adapters/controllers/client/controller-client';
import { CsvController } from './infrastructure/adapters/controllers/csv-files/controller-cvs';

@Module({
  imports: TypeOrmModule.forFeature([Fruit, Variety, Crop, Field, Farmer]),
  controllers: [
    FruitsController,
    CropsController,
    FarmersController,
    FieldsController,
    ClientsController,
    CsvController,
  ],
  providers: [
    FruitsService,
    CropsService,
    FieldsService,
    FarmersService,
    ClientsService,
  ],
})
export class AppModule {}
