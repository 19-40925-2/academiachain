"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversityModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const professor_entity_1 = require("../Professor/professor.entity");
const student_entity_1 = require("../Student/student.entity");
const university_entity_1 = require("./university.entity");
const university_controller_1 = require("./university.controller");
const university_service_1 = require("./university.service");
const certificate_entity_1 = require("../Certificate/certificate.entity");
let UniversityModule = exports.UniversityModule = class UniversityModule {
};
exports.UniversityModule = UniversityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([professor_entity_1.ProfessorEntity, student_entity_1.StudentEntity, university_entity_1.UniversityEntity, certificate_entity_1.CertificateEntity])],
        controllers: [university_controller_1.UniversityController],
        providers: [university_service_1.UniversityService]
    })
], UniversityModule);
//# sourceMappingURL=university.module.js.map