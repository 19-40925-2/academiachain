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
exports.UniversityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("../Student/student.entity");
const professor_entity_1 = require("../Professor/professor.entity");
const university_entity_1 = require("./university.entity");
let UniversityService = exports.UniversityService = class UniversityService {
    constructor(professorRepository, studentRepository, universityRepository) {
        this.professorRepository = professorRepository;
        this.studentRepository = studentRepository;
        this.universityRepository = universityRepository;
    }
    getIndex() {
        return 'hello';
    }
    async getAllStudents() {
        return this.universityRepository.find();
    }
    async findStudent(searchKey) {
        const student = await this.universityRepository.findOne({
            where: [
                { Username: searchKey },
            ],
        });
        return student;
    }
    async signup(studentDTO) {
        const { Username, Phone, Email } = studentDTO;
        const existingUsername = await this.professorRepository.findOne({ where: { Username } });
        if (existingUsername) {
            throw new common_1.ConflictException('Username already exists');
        }
        const existingUsernamesTUDENT = await this.studentRepository.findOne({ where: { Username } });
        if (existingUsernamesTUDENT) {
            throw new common_1.ConflictException('Username already exists');
        }
        const existingUsernameUni = await this.universityRepository.findOne({ where: { Username } });
        if (existingUsernameUni) {
            throw new common_1.ConflictException('Username already exists');
        }
        const existingPhone = await this.universityRepository.findOne({ where: { Phone } });
        if (existingPhone) {
            throw new common_1.ConflictException('Phone number already exists');
        }
        const existingEmail = await this.universityRepository.findOne({ where: { Email } });
        if (existingEmail) {
            throw new common_1.ConflictException('Email already exists');
        }
        return this.universityRepository.save(studentDTO);
    }
    async login(username, password) {
        const mydata = await this.universityRepository.findOneBy({ Username: username });
        if (mydata) {
            if (mydata.Password == password) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else
            return 0;
    }
};
exports.UniversityService = UniversityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(professor_entity_1.ProfessorEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(student_entity_1.StudentEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(university_entity_1.UniversityEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UniversityService);
//# sourceMappingURL=university.service.js.map