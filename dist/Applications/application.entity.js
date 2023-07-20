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
exports.ApplicationEntity = void 0;
const position_entity_1 = require("../Position/position.entity");
const student_entity_1 = require("../Student/student.entity");
const typeorm_1 = require("typeorm");
let ApplicationEntity = exports.ApplicationEntity = class ApplicationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ApplicationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], ApplicationEntity.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ApplicationEntity.prototype, "isAccpected", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => position_entity_1.PositionEntity, position => position.applications),
    __metadata("design:type", position_entity_1.PositionEntity)
], ApplicationEntity.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.StudentEntity, student => student.applications),
    __metadata("design:type", student_entity_1.StudentEntity)
], ApplicationEntity.prototype, "student", void 0);
exports.ApplicationEntity = ApplicationEntity = __decorate([
    (0, typeorm_1.Entity)('Application'),
    (0, typeorm_1.Unique)(['position', 'student'])
], ApplicationEntity);
//# sourceMappingURL=application.entity.js.map