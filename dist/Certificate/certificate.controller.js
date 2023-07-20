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
exports.CertificateController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const certificate_services_1 = require("./certificate.services");
const certificate_dto_1 = require("./DTO/certificate.dto");
let CertificateController = exports.CertificateController = class CertificateController {
    constructor(certificateService) {
        this.certificateService = certificateService;
    }
    Index() {
        console.log('Submitted Data:');
        return this.certificateService.getIndex();
    }
    getAllStudent() {
        return this.certificateService.getAllStudents();
    }
    async findStudent(searchKey) {
        return this.certificateService.findStudent(searchKey);
    }
    signup(mydto, file, studentUsername) {
        mydto.fileName = file.filename;
        return this.certificateService.signup(mydto, studentUsername);
    }
    async blockStudent(username) {
        return this.certificateService.blockStudentByUsername(username);
    }
};
__decorate([
    (0, common_1.Get)("/index"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CertificateController.prototype, "Index", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CertificateController.prototype, "getAllStudent", null);
__decorate([
    (0, common_1.Get)('find/:searchKey'),
    __param(0, (0, common_1.Param)('searchKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "findStudent", null);
__decorate([
    (0, common_1.Post)('/create/:studentUsername'),
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
    __param(2, (0, common_1.Param)('studentUsername')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [certificate_dto_1.CertificateDTO, Object, String]),
    __metadata("design:returntype", void 0)
], CertificateController.prototype, "signup", null);
__decorate([
    (0, common_1.Put)('/validate/:3'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "blockStudent", null);
exports.CertificateController = CertificateController = __decorate([
    (0, common_1.Controller)("/api/certificates"),
    __metadata("design:paramtypes", [certificate_services_1.CertificateService])
], CertificateController);
//# sourceMappingURL=certificate.controller.js.map