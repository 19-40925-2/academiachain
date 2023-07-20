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
exports.PositionController = void 0;
const common_1 = require("@nestjs/common");
const position_service_1 = require("./position.service");
const position_dto_1 = require("./DTO/position.dto");
let PositionController = exports.PositionController = class PositionController {
    constructor(positionService) {
        this.positionService = positionService;
    }
    async createPost(professorUsername, positionDto) {
        positionDto.title = 'MS.c/Ph.D. Position';
        positionDto.department = 'Data Science';
        positionDto.description = 'Join our dynamic research team as an MS.c or Ph.D. student in the field of Data Science. You will have the opportunity to work on diverse and challenging projects related to big data analytics, statistical modeling, and predictive analytics.';
        positionDto.location = 'Daka, Bangladesh';
        positionDto.salary = 40000;
        positionDto.requirements = "Bachelor's or Master's degree in Computer Science, Statistics, or a related field. Strong programming skills in Python and experience with data analysis and machine learning techniques are desired.";
        return this.positionService.createPosition(professorUsername, positionDto);
    }
    getAllStudent() {
        return this.positionService.getAllStudents();
    }
    searchById(id) {
        return this.positionService.searchById(id);
    }
};
__decorate([
    (0, common_1.Post)('/create/:professorusername'),
    __param(0, (0, common_1.Param)('professorusername')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, position_dto_1.PositionDto]),
    __metadata("design:returntype", Promise)
], PositionController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], PositionController.prototype, "getAllStudent", null);
__decorate([
    (0, common_1.Get)("/search/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PositionController.prototype, "searchById", null);
exports.PositionController = PositionController = __decorate([
    (0, common_1.Controller)('/position'),
    __metadata("design:paramtypes", [position_service_1.PositionService])
], PositionController);
//# sourceMappingURL=position.controller.js.map