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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variety = void 0;
const typeorm_1 = require("typeorm");
const fruit_1 = require("./fruit");
let Variety = class Variety {
};
exports.Variety = Variety;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Variety.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Variety.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => fruit_1.Fruit, (fruit) => fruit.varieties),
    __metadata("design:type", Array)
], Variety.prototype, "fruits", void 0);
exports.Variety = Variety = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['name', 'fruitId'])
], Variety);
//# sourceMappingURL=variety.js.map