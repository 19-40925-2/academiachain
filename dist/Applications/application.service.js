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
exports.ApplicationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const position_entity_1 = require("../Position/position.entity");
const application_entity_1 = require("./application.entity");
const student_entity_1 = require("../Student/student.entity");
let ApplicationService = exports.ApplicationService = class ApplicationService {
    constructor(positionRepository, appRepo, stuRepo) {
        this.positionRepository = positionRepository;
        this.appRepo = appRepo;
        this.stuRepo = stuRepo;
    }
    async createPosition(studentUsername, positionId) {
        const existingUsername = await this.stuRepo.findOne({ where: { Username: studentUsername } });
        if (!existingUsername) {
            throw new common_1.ConflictException('Student not exist');
        }
        const position = await this.positionRepository.findOne({ where: { id: positionId } });
        if (!position) {
            throw new common_1.ConflictException('Position not exist');
        }
        const create = new application_entity_1.ApplicationEntity();
        create.position = position;
        create.student = existingUsername;
        return this.appRepo.save(create);
    }
    async getAllApplications() {
        return this.appRepo.find({
            relations: ['position', 'position.professor', 'student'],
        });
    }
    async blockStudentByUsername(username) {
        const existingStudent = await this.appRepo.findOne({ where: { id: username } });
        if (!existingStudent) {
            throw new common_1.NotFoundException('Student not found');
        }
        existingStudent.isAccpected = true;
        return this.appRepo.save(existingStudent);
    }
};
exports.ApplicationService = ApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(position_entity_1.PositionEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(application_entity_1.ApplicationEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(student_entity_1.StudentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ApplicationService);
//# sourceMappingURL=application.service.js.map