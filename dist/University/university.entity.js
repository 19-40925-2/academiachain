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
exports.UniversityEntity = void 0;
const certificate_entity_1 = require("../Certificate/certificate.entity");
const typeorm_1 = require("typeorm");
let UniversityEntity = exports.UniversityEntity = class UniversityEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UniversityEntity.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UniversityEntity.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], UniversityEntity.prototype, "Stb", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UniversityEntity.prototype, "Email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UniversityEntity.prototype, "Phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UniversityEntity.prototype, "Username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UniversityEntity.prototype, "Password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UniversityEntity.prototype, "filename", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UniversityEntity.prototype, "Country", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => certificate_entity_1.CertificateEntity, (certificate) => certificate.university),
    __metadata("design:type", Array)
], UniversityEntity.prototype, "certificate", void 0);
exports.UniversityEntity = UniversityEntity = __decorate([
    (0, typeorm_1.Entity)("University")
], UniversityEntity);
//# sourceMappingURL=university.entity.js.map