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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const student_dto_1 = require("./DTO/student.dto");
let StudentController = exports.StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    Index() {
        console.log('Submitted Data:');
        return this.studentService.getIndex();
    }
    getAllStudent() {
        return this.studentService.getAllStudents();
    }
    searchById(id) {
        return this.studentService.searchById(id);
    }
    async findStudent(searchKey) {
        return this.studentService.findStudent(searchKey);
    }
    async findStudentUsername(searchKey) {
        return this.studentService.findStudentUsername(searchKey);
    }
    signout(session) {
        return { message: "you are logged out" };
    }
    async addModerator(session, username, password) {
        if (await this.studentService.login(username, password) == 1) {
            return { message: "Successfully logged" };
        }
        else {
            return { message: "Invalid username or password" };
        }
    }
    signup(mydto, file) {
        mydto.filename = file.filename;
        mydto.Blocked = false;
        mydto.createdAt = new Date();
        mydto.updatedAt = new Date();
        mydto.CV = null;
        return this.studentService.signup(mydto);
    }
    async uploadCv(username, cv) {
        return this.studentService.cvUpload(cv.filename, username);
    }
    async updateProfile(username, updatedProfile) {
        return this.studentService.updateProfileByUsername(username, updatedProfile);
    }
    async deleteStudent(username) {
        await this.studentService.deleteStudentByUsername(username);
    }
    async blockStudent(username) {
        return this.studentService.blockStudentByUsername(username);
    }
    async unblockStudent(username) {
        return this.studentService.unblockStudentByUsername(username);
    }
};
__decorate([
    (0, common_1.Get)("/index"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StudentController.prototype, "Index", null);
__decorate([
    (0, common_1.Get)('/getAllStudent'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StudentController.prototype, "getAllStudent", null);
__decorate([
    (0, common_1.Get)("/search/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "searchById", null);
__decorate([
    (0, common_1.Get)('/find/:searchKey'),
    __param(0, (0, common_1.Param)('searchKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findStudent", null);
__decorate([
    (0, common_1.Get)('/search1/:searchKey'),
    __param(0, (0, common_1.Param)('searchKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findStudentUsername", null);
__decorate([
    (0, common_1.Get)('/logout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "signout", null);
__decorate([
    (0, common_1.Put)("/login"),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)("username")),
    __param(2, (0, common_1.Body)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "addModerator", null);
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
    __metadata("design:paramtypes", [student_dto_1.StudentDTO, Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('/cv/upload/:username'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('cv', { storage: (0, multer_1.diskStorage)({
            destination: './cv',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "uploadCv", null);
__decorate([
    (0, common_1.Put)('/updateProfile/:username'),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Delete)('/delete/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteStudent", null);
__decorate([
    (0, common_1.Put)('/block/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "blockStudent", null);
__decorate([
    (0, common_1.Put)('/unblock/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "unblockStudent", null);
exports.StudentController = StudentController = __decorate([
    (0, common_1.Controller)("/api/student"),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
//# sourceMappingURL=student.controller.js.map