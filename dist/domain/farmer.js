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
exports.Farmer = void 0;
const typeorm_1 = require("typeorm");
const client_1 = require("./client");
const field_1 = require("./field");
let Farmer = class Farmer {
};
exports.Farmer = Farmer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Farmer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Farmer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Farmer.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => field_1.Field, (field) => field.farmer),
    __metadata("design:type", Array)
], Farmer.prototype, "fields", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => client_1.Client, (client) => client.farmer),
    __metadata("design:type", Array)
], Farmer.prototype, "clients", void 0);
exports.Farmer = Farmer = __decorate([
    (0, typeorm_1.Entity)()
], Farmer);
//# sourceMappingURL=farmer.js.map