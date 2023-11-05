"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fruit_1 = require("./domain/fruit");
const field_1 = require("./domain/field");
const farmer_1 = require("./domain/farmer");
const variety_1 = require("./domain/variety");
const crop_1 = require("./domain/crop");
const service_fruit_1 = require("./application/service/fruit/service-fruit");
const controller_fruit_1 = require("./infrastructure/adapters/controllers/fruits/controller-fruit");
const service_crop_1 = require("./application/service/crop/service-crop");
const controller_crop_1 = require("./infrastructure/adapters/controllers/crop/controller-crop");
const service_field_1 = require("./application/service/field/service-field");
const controller_field_1 = require("./infrastructure/adapters/controllers/field/controller-field");
const service_farmer_1 = require("./application/service/farmer/service-farmer");
const controller_farmer_1 = require("./infrastructure/adapters/controllers/farmer/controller-farmer");
const service_client_1 = require("./application/service/client/service-client");
const controller_client_1 = require("./infrastructure/adapters/controllers/client/controller-client");
const controller_cvs_1 = require("./infrastructure/adapters/controllers/csv-files/controller-cvs");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([fruit_1.Fruit, variety_1.Variety, crop_1.Crop, field_1.Field, farmer_1.Farmer])
        ],
        controllers: [
            controller_fruit_1.FruitsController,
            controller_crop_1.CropsController,
            controller_farmer_1.FarmersController,
            controller_field_1.FieldsController,
            controller_client_1.ClientsController,
            controller_cvs_1.CsvController,
        ],
        providers: [
            service_fruit_1.FruitsService,
            service_crop_1.CropsService,
            service_field_1.FieldsService,
            service_farmer_1.FarmersService,
            service_client_1.ClientsService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map