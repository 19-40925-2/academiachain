"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const professor_entity_1 = require("./professor.entity");
const professor_controller_1 = require("./professor.controller");
const professor_services_1 = require("./professor.services");
const student_entity_1 = require("../Student/student.entity");
const position_entity_1 = require("../Position/position.entity");
let ProfessorModule = exports.ProfessorModule = class ProfessorModule {
};
exports.ProfessorModule = ProfessorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([professor_entity_1.ProfessorEntity, student_entity_1.StudentEntity, position_entity_1.PositionEntity])],
        controllers: [professor_controller_1.ProfessorController],
        providers: [professor_services_1.ProfessorService]
    })
], ProfessorModule);
//# sourceMappingURL=professor.module.js.map