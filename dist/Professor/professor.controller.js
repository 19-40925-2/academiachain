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
exports.ProfessorController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const professor_services_1 = require("./professor.services");
const professor_dto_1 = require("./DTO/professor.dto");
let ProfessorController = exports.ProfessorController = class ProfessorController {
    constructor(professorService) {
        this.professorService = professorService;
    }
    Index() {
        console.log('Submitted Data:');
        return this.professorService.getIndex();
    }
    getAllStudent() {
        return this.professorService.getAllStudents();
    }
    searchById(id) {
        return this.professorService.searchById(id);
    }
    async findStudent(searchKey) {
        return this.professorService.findStudent(searchKey);
    }
    async findStudentUsername(searchKey) {
        return this.professorService.findStudentUsername(searchKey);
    }
    signup(mydto, file) {
        mydto.filename = file.filename;
        mydto.Blocked = false;
        mydto.createdAt = new Date();
        mydto.updatedAt = new Date();
        return this.professorService.signup(mydto);
    }
    async updateProfile(username, updatedProfile) {
        return this.professorService.updateProfileByUsername(username, updatedProfile);
    }
    async deleteStudent(username) {
        await this.professorService.deleteStudentByUsername(username);
    }
    async blockStudent(username) {
        return this.professorService.blockStudentByUsername(username);
    }
    async unblockStudent(username) {
        return this.professorService.unblockStudentByUsername(username);
    }
    async addModerator(session, username, password) {
        if (await this.professorService.login(username, password) == 1) {
            return { message: "Successfully logged" };
        }
        else {
            return { message: "Invalid username or password" };
        }
    }
};
__decorate([
    (0, common_1.Get)("/index"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ProfessorController.prototype, "Index", null);
__decorate([
    (0, common_1.Get)('/getAllProff'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ProfessorController.prototype, "getAllStudent", null);
__decorate([
    (0, common_1.Get)("/search/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfessorController.prototype, "searchById", null);
__decorate([
    (0, common_1.Get)('find/:searchKey'),
    __param(0, (0, common_1.Param)('searchKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "findStudent", null);
__decorate([
    (0, common_1.Get)('/search1/:searchKey'),
    __param(0, (0, common_1.Param)('searchKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "findStudentUsername", null);
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('myfile', { storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [professor_dto_1.ProfessorDTO, Object]),
    __metadata("design:returntype", void 0)
], ProfessorController.prototype, "signup", null);
__decorate([
    (0, common_1.Put)('/updateProfile/:username'),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Delete)('/delete/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "deleteStudent", null);
__decorate([
    (0, common_1.Put)('/block/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "blockStudent", null);
__decorate([
    (0, common_1.Put)('/unblock/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "unblockStudent", null);
__decorate([
    (0, common_1.Put)("/login"),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)("username")),
    __param(2, (0, common_1.Body)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], ProfessorController.prototype, "addModerator", null);
exports.ProfessorController = ProfessorController = __decorate([
    (0, common_1.Controller)("/api/professor"),
    __metadata("design:paramtypes", [professor_services_1.ProfessorService])
], ProfessorController);
//# sourceMappingURL=professor.controller.js.map