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
exports.StudentEntity = void 0;
const application_entity_1 = require("../Applications/application.entity");
const certificate_entity_1 = require("../Certificate/certificate.entity");
const typeorm_1 = require("typeorm");
let StudentEntity = exports.StudentEntity = class StudentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StudentEntity.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentEntity.prototype, "Firstname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentEntity.prototype, "Lastname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], StudentEntity.prototype, "DOB", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentEntity.prototype, "Email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentEntity.prototype, "Phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentEntity.prototype, "Username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentEntity.prototype, "Password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], StudentEntity.prototype, "Blocked", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentEntity.prototype, "filename", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentEntity.prototype, "AboutMe", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentEntity.prototype, "Address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentEntity.prototype, "Country", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentEntity.prototype, "University", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentEntity.prototype, "CV", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], StudentEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], StudentEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => certificate_entity_1.CertificateEntity, certificate => certificate.student),
    __metadata("design:type", Array)
], StudentEntity.prototype, "certificates", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => application_entity_1.ApplicationEntity, application => application.student),
    __metadata("design:type", Array)
], StudentEntity.prototype, "applications", void 0);
exports.StudentEntity = StudentEntity = __decorate([
    (0, typeorm_1.Entity)("Student")
], StudentEntity);
//# sourceMappingURL=student.entity.js.map