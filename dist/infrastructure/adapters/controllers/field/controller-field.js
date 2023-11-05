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
exports.FieldsController = void 0;
const common_1 = require("@nestjs/common");
const service_field_1 = require("../../../../application/service/field/service-field");
const farmer_1 = require("../../../../domain/farmer");
let FieldsController = class FieldsController {
    constructor(fieldsService) {
        this.fieldsService = fieldsService;
    }
    async create(name, location, farmerId) {
        const farmer = new farmer_1.Farmer();
        farmer.id = farmerId;
        return this.fieldsService.createField(name, location, farmer);
    }
};
exports.FieldsController = FieldsController;
__decorate([
    (0, common_1.Post)(':farmerId'),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('location')),
    __param(2, (0, common_1.Param)('farmerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], FieldsController.prototype, "create", null);
exports.FieldsController = FieldsController = __decorate([
    (0, common_1.Controller)('fields'),
    __metadata("design:paramtypes", [service_field_1.FieldsService])
], FieldsController);
//# sourceMappingURL=controller-field.js.map