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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorDTO = void 0;
const class_validator_1 = require("class-validator");
class ProfessorDTO {
}
exports.ProfessorDTO = ProfessorDTO;
__decorate([
    (0, class_validator_1.IsAlpha)(),
    (0, class_validator_1.IsString)({ message: "Please enter your First name" }),
    (0, class_validator_1.MaxLength)(15, { message: "Maximum length of the first name can't exceed 15 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: "First name can't be empty" }),
    __metadata("design:type", String)
], ProfessorDTO.prototype, "Firstname", void 0);
__decorate([
    (0, class_validator_1.IsAlpha)(),
    (0, class_validator_1.IsString)({ message: "Please enter your Last name" }),
    (0, class_validator_1.MaxLength)(15, { message: "Maximum length of the first name can't exceed 15 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Last name can't be empty" }),
    __metadata("design:type", String)
], ProfessorDTO.prototype, "Lastname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Date of birth can't be empty" }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], ProfessorDTO.prototype, "DOB", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Matches)("^[^@\s]+@[^@\s]+\.(com|net|org|gov|edu)$"),
    __metadata("design:type", String)
], ProfessorDTO.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(15, { message: "Maximum length of the Mobile number can't exceed 15 characters" }),
    (0, class_validator_1.MinLength)(11, { message: "Minimum length of the Mobile number can't exceed 3 characters" }),
    (0, class_validator_1.IsMobilePhone)("bn-BD"),
    __metadata("design:type", String)
], ProfessorDTO.prototype, "Phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Please enter your Username" }),
    (0, class_validator_1.MaxLength)(15, { message: "Maximum length of the Username can't exceed 15 characters" }),
    (0, class_validator_1.MinLength)(5, { message: "Minimum length of the Username can't exceed 5 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Username can't be empty" }),
    __metadata("design:type", String)
], ProfessorDTO.prototype, "Username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Password can't be empty" }),
    (0, class_validator_1.MaxLength)(25, { message: "Maximum length of the Password can't exceed 25 characters" }),
    (0, class_validator_1.MinLength)(8, { message: "Minimum length of the Password can't exceed 8 characters" }),
    __metadata("design:type", String)
], ProfessorDTO.prototype, "Password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: "Enter a boolean value: true or false" }),
    __metadata("design:type", Boolean)
], ProfessorDTO.prototype, "Blocked", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please provide a filename" }),
    __metadata("design:type", String)
], ProfessorDTO.prototype, "filename", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Please enter information about yourself" }),
    (0, class_validator_1.MaxLength)(255, { message: "Maximum length of the About Me field can't exceed 255 characters" }),
    __metadata("design:type", String)
], ProfessorDTO.prototype, "AboutMe", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Please enter your address" }),
    (0, class_validator_1.MaxLength)(255, { message: "Maximum length of the address field can't exceed 255 characters" }),
    __metadata("design:type", String)
], ProfessorDTO.prototype, "Address", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Please enter your country" }),
    (0, class_validator_1.MaxLength)(50, { message: "Maximum length of the country field can't exceed 50 characters" }),
    __metadata("design:type", String)
], ProfessorDTO.prototype, "Country", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Please enter your university" }),
    (0, class_validator_1.MaxLength)(100, { message: "Maximum length of the university field can't exceed 100 characters" }),
    __metadata("design:type", String)
], ProfessorDTO.prototype, "University", void 0);
//# sourceMappingURL=professor.dto.js.map