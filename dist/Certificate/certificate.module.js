"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const professor_entity_1 = require("../Professor/professor.entity");
const student_entity_1 = require("../Student/student.entity");
const certificate_entity_1 = require("./certificate.entity");
const certificate_controller_1 = require("./certificate.controller");
const certificate_services_1 = require("./certificate.services");
const university_entity_1 = require("../University/university.entity");
let CertificateModule = exports.CertificateModule = class CertificateModule {
};
exports.CertificateModule = CertificateModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([certificate_entity_1.CertificateEntity, professor_entity_1.ProfessorEntity, student_entity_1.StudentEntity, university_entity_1.UniversityEntity])],
        controllers: [certificate_controller_1.CertificateController],
        providers: [certificate_services_1.CertificateService]
    })
], CertificateModule);
//# sourceMappingURL=certificate.module.js.map