"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fruit_1 = require("../../../domain/fruit");
const variety_1 = require("../../../domain/variety");
let FruitsService = class FruitsService {
    constructor(fruitRepository, varietyRepository) {
        this.fruitRepository = fruitRepository;
        this.varietyRepository = varietyRepository;
    }
    async createFruit(name) {
        const fruit = this.fruitRepository.create({ name });
        return this.fruitRepository.save(fruit);
    }
    async createVariety(fruitId, name) {
        const fruit = await this.fruitRepository.findOne(fruitId);
        if (!fruit) {
            throw new Error('Fruit not found');
        }
        const variety = this.varietyRepository.create({ name });
        fruit.varieties.push(variety);
        await this.fruitRepository.save(fruit);
        return variety;
    }
};
exports.FruitsService = FruitsService;
exports.FruitsService = FruitsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fruit_1.Fruit)),
    __param(1, (0, typeorm_1.InjectRepository)(variety_1.Variety)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FruitsService);
//# sourceMappingURL=service-fruit.js.map