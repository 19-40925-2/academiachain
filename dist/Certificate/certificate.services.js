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
exports.CertificateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("../Student/student.entity");
const professor_entity_1 = require("../Professor/professor.entity");
const university_entity_1 = require("../University/university.entity");
const certificate_entity_1 = require("./certificate.entity");
let CertificateService = exports.CertificateService = class CertificateService {
    constructor(professorRepository, studentRepository, universityRepository, certificateRepo) {
        this.professorRepository = professorRepository;
        this.studentRepository = studentRepository;
        this.universityRepository = universityRepository;
        this.certificateRepo = certificateRepo;
    }
    getIndex() {
        return 'hello';
    }
    async getAllStudents() {
        return this.certificateRepo.find({
            relations: ['university', 'student'],
        });
    }
    async findStudent(searchKey) {
        const student = await this.universityRepository.findOne({
            where: [
                { Username: searchKey },
            ],
        });
        return student;
    }
    async signup(studentDTO, studentUsername) {
        const existingUsername = await this.studentRepository.findOne({ where: { Username: studentUsername } });
        if (!existingUsername) {
            throw new common_1.ConflictException('Student username already not exists');
        }
        const existingUsernameUni = await this.universityRepository.findOne({ where: { Username: studentDTO.universityUsername } });
        if (!existingUsernameUni) {
            throw new common_1.ConflictException('University username not eist');
        }
        const cer = new certificate_entity_1.CertificateEntity();
        cer.cgpa = studentDTO.cgpa;
        cer.enrollmentYear = studentDTO.enrollmentYear;
        cer.graduationYear = studentDTO.graduationYear;
        cer.isVerified = false;
        cer.name = studentDTO.name;
        cer.student = existingUsername;
        cer.university = existingUsernameUni;
        cer.filename = studentDTO.fileName;
        return this.certificateRepo.save(cer);
    }
    async blockStudentByUsername(username) {
        const existingStudent = await this.certificateRepo.findOne({ where: { id: username } });
        if (!existingStudent) {
            throw new common_1.NotFoundException('Certificate not found');
        }
        existingStudent.isVerified = true;
        return this.certificateRepo.save(existingStudent);
    }
};
exports.CertificateService = CertificateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(professor_entity_1.ProfessorEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(student_entity_1.StudentEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(university_entity_1.UniversityEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(certificate_entity_1.CertificateEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CertificateService);
//# sourceMappingURL=certificate.services.js.map