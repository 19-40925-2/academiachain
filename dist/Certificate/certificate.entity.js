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
exports.CertificateEntity = void 0;
const student_entity_1 = require("../Student/student.entity");
const university_entity_1 = require("../University/university.entity");
const typeorm_1 = require("typeorm");
let CertificateEntity = exports.CertificateEntity = class CertificateEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CertificateEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CertificateEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], CertificateEntity.prototype, "cgpa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CertificateEntity.prototype, "graduationYear", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CertificateEntity.prototype, "enrollmentYear", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CertificateEntity.prototype, "filename", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => university_entity_1.UniversityEntity, (university) => university.certificate),
    __metadata("design:type", university_entity_1.UniversityEntity)
], CertificateEntity.prototype, "university", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.StudentEntity, student => student.certificates),
    __metadata("design:type", student_entity_1.StudentEntity)
], CertificateEntity.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], CertificateEntity.prototype, "isVerified", void 0);
exports.CertificateEntity = CertificateEntity = __decorate([
    (0, typeorm_1.Entity)('Certificate')
], CertificateEntity);
//# sourceMappingURL=certificate.entity.js.map