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
exports.ProfessorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const professor_entity_1 = require("./professor.entity");
const student_entity_1 = require("../Student/student.entity");
let ProfessorService = exports.ProfessorService = class ProfessorService {
    constructor(professorRepository, studentRepository) {
        this.professorRepository = professorRepository;
        this.studentRepository = studentRepository;
    }
    getIndex() {
        return 'hello';
    }
    async getAllStudents() {
        return this.professorRepository.find();
    }
    async findStudent(searchKey) {
        const student = await this.professorRepository.findOne({
            where: [
                { Firstname: searchKey },
                { Lastname: searchKey },
                { Username: searchKey },
            ],
        });
        return student;
    }
    async findStudentUsername(searchKey) {
        const student = await this.professorRepository.findOne({
            where: [
                { Username: searchKey }
            ],
        });
        return student;
    }
    async login(username, password) {
        const mydata = await this.professorRepository.findOneBy({ Username: username });
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
    searchById(id) {
        const ext = this.professorRepository.findOneBy({ Id: id });
        if (ext) {
            return ext;
        }
        else
            return "No matches found for this ID in database!";
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
        const existingPhone = await this.professorRepository.findOne({ where: { Phone } });
        if (existingPhone) {
            throw new common_1.ConflictException('Phone number already exists');
        }
        const existingEmail = await this.professorRepository.findOne({ where: { Email } });
        if (existingEmail) {
            throw new common_1.ConflictException('Email already exists');
        }
        return this.professorRepository.save(studentDTO);
    }
    async updateProfileByUsername(username, updatedProfile) {
        const existingStudent = await this.professorRepository.findOne({ where: { Username: username } });
        if (!existingStudent) {
            throw new common_1.NotFoundException('Student not found');
        }
        Object.assign(existingStudent, updatedProfile);
        return this.professorRepository.save(existingStudent);
    }
    async deleteStudentByUsername(username) {
        const existingStudent = await this.professorRepository.findOne({ where: { Username: username } });
        if (!existingStudent) {
            throw new common_1.NotFoundException('Student not found');
        }
        await this.professorRepository.remove(existingStudent);
    }
    async blockStudentByUsername(username) {
        const existingStudent = await this.professorRepository.findOne({ where: { Username: username } });
        if (!existingStudent) {
            throw new common_1.NotFoundException('Student not found');
        }
        existingStudent.Blocked = true;
        return this.professorRepository.save(existingStudent);
    }
    async unblockStudentByUsername(username) {
        const existingStudent = await this.professorRepository.findOne({ where: { Username: username } });
        if (!existingStudent) {
            throw new common_1.NotFoundException('Student not found');
        }
        existingStudent.Blocked = false;
        return this.professorRepository.save(existingStudent);
    }
};
exports.ProfessorService = ProfessorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(professor_entity_1.ProfessorEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(student_entity_1.StudentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProfessorService);
//# sourceMappingURL=professor.services.js.map