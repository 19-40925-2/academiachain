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
exports.PositionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const position_entity_1 = require("./position.entity");
const professor_entity_1 = require("../Professor/professor.entity");
let PositionService = exports.PositionService = class PositionService {
    constructor(positionRepository, professorRepository) {
        this.positionRepository = positionRepository;
        this.professorRepository = professorRepository;
    }
    async getAllStudents() {
        return this.positionRepository.find({
            relations: ['professor'],
        });
    }
    searchById(id) {
        const queryBuilder = this.positionRepository.createQueryBuilder('position')
            .leftJoinAndSelect('position.professor', 'professor')
            .where('position.id = :id', { id })
            .getOne();
        if (queryBuilder) {
            return queryBuilder;
        }
        else {
            return 'No matches found for this ID in the database!';
        }
    }
    async createPosition(professorUsername, positionDto) {
        const existingUsername = await this.professorRepository.findOne({ where: { Username: professorUsername } });
        if (!existingUsername) {
            throw new common_1.ConflictException('Professor not exist');
        }
        const create = new position_entity_1.PositionEntity();
        create.department = positionDto.department;
        create.description = positionDto.description;
        create.location = positionDto.location;
        create.professor = existingUsername;
        create.requirements = positionDto.requirements;
        create.salary = positionDto.salary;
        create.title = positionDto.title;
        return this.positionRepository.save(create);
    }
};
exports.PositionService = PositionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(position_entity_1.PositionEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(professor_entity_1.ProfessorEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PositionService);
//# sourceMappingURL=position.service.js.map