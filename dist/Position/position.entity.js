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
exports.PositionEntity = void 0;
const application_entity_1 = require("../Applications/application.entity");
const professor_entity_1 = require("../Professor/professor.entity");
const typeorm_1 = require("typeorm");
let PositionEntity = exports.PositionEntity = class PositionEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PositionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PositionEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PositionEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PositionEntity.prototype, "requirements", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PositionEntity.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PositionEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2 }),
    __metadata("design:type", Number)
], PositionEntity.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => professor_entity_1.ProfessorEntity, professor => professor.positions),
    __metadata("design:type", professor_entity_1.ProfessorEntity)
], PositionEntity.prototype, "professor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => application_entity_1.ApplicationEntity, application => application.position),
    __metadata("design:type", Array)
], PositionEntity.prototype, "applications", void 0);
exports.PositionEntity = PositionEntity = __decorate([
    (0, typeorm_1.Entity)('Position')
], PositionEntity);
//# sourceMappingURL=position.entity.js.map