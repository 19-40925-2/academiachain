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
exports.UniversityController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const university_service_1 = require("./university.service");
const university_dto_1 = require("./DTO/university.dto");
let UniversityController = exports.UniversityController = class UniversityController {
    constructor(uniService) {
        this.uniService = uniService;
    }
    Index() {
        console.log('Submitted Data:');
        return this.uniService.getIndex();
    }
    getAllStudent() {
        return this.uniService.getAllStudents();
    }
    async findStudent(searchKey) {
        return this.uniService.findStudent(searchKey);
    }
    async addModerator(session, username, password) {
        if (await this.uniService.login(username, password) == 1) {
            return { message: "Successfully logged" };
        }
        else {
            return { message: "Invalid username or password" };
        }
    }
    signup(mydto, file) {
        mydto.filename = file.filename;
        return this.uniService.signup(mydto);
    }
    getImages(name, res) {
        res.sendFile(name, { root: './uploads' });
    }
    getImages1(name, res) {
        res.sendFile(name, { root: './cv' });
    }
};
__decorate([
    (0, common_1.Get)("/index"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UniversityController.prototype, "Index", null);
__decorate([
    (0, common_1.Get)('/allUni'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UniversityController.prototype, "getAllStudent", null);
__decorate([
    (0, common_1.Get)('find/:searchKey'),
    __param(0, (0, common_1.Param)('searchKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UniversityController.prototype, "findStudent", null);
__decorate([
    (0, common_1.Put)("/login"),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)("username")),
    __param(2, (0, common_1.Body)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], UniversityController.prototype, "addModerator", null);
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
    __metadata("design:paramtypes", [university_dto_1.UniversityDTO, Object]),
    __metadata("design:returntype", void 0)
], UniversityController.prototype, "signup", null);
__decorate([
    (0, common_1.Get)('/getimage/:name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UniversityController.prototype, "getImages", null);
__decorate([
    (0, common_1.Get)('/getimage1/:name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UniversityController.prototype, "getImages1", null);
exports.UniversityController = UniversityController = __decorate([
    (0, common_1.Controller)("/api/uni"),
    __metadata("design:paramtypes", [university_service_1.UniversityService])
], UniversityController);
//# sourceMappingURL=university.controller.js.map