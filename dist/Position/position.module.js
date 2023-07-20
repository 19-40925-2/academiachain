"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionModule = void 0;
const common_1 = require("@nestjs/common");
const position_controller_1 = require("./position.controller");
const typeorm_1 = require("@nestjs/typeorm");
const position_entity_1 = require("./position.entity");
const professor_entity_1 = require("../Professor/professor.entity");
const position_service_1 = require("./position.service");
const application_entity_1 = require("../Applications/application.entity");
let PositionModule = exports.PositionModule = class PositionModule {
};
exports.PositionModule = PositionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([position_entity_1.PositionEntity, professor_entity_1.ProfessorEntity, application_entity_1.ApplicationEntity])],
        controllers: [position_controller_1.PositionController],
        providers: [position_service_1.PositionService],
    })
], PositionModule);
//# sourceMappingURL=position.module.js.map