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
exports.CsvController = void 0;
const common_1 = require("@nestjs/common");
const csv = require("csv-parser");
const fs = require("fs");
const fruit_1 = require("../../../../domain/fruit");
const typeorm_1 = require("typeorm");
let CsvController = class CsvController {
    async uploadCsv(req, res) {
        const connection = await (0, typeorm_1.createConnection)();
        const fruitRepository = (0, typeorm_1.getRepository)(fruit_1.Fruit);
        const results = [];
        fs.createReadStream(req.file.path)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
            connection.close();
            res.send('CSV data has been processed and loaded succesfully ✨.');
        });
    }
};
exports.CsvController = CsvController;
__decorate([
    (0, common_1.Post)('upload'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CsvController.prototype, "uploadCsv", null);
exports.CsvController = CsvController = __decorate([
    (0, common_1.Controller)('csv')
], CsvController);
//# sourceMappingURL=controller-cvs.js.map