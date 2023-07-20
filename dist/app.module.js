"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const student_module_1 = require("./Student/student.module");
const typeorm_1 = require("@nestjs/typeorm");
const platform_express_1 = require("@nestjs/platform-express");
const professor_module_1 = require("./Professor/professor.module");
const university_module_1 = require("./University/university.module");
const certificate_module_1 = require("./Certificate/certificate.module");
const position_module_1 = require("./Position/position.module");
const application_module_1 = require("./Applications/application.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            student_module_1.StudentModule, professor_module_1.ProfessorModule, university_module_1.UniversityModule, certificate_module_1.CertificateModule, position_module_1.PositionModule, application_module_1.ApplicationModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '112233',
                database: 'academiachainv1.2',
                autoLoadEntities: true,
                synchronize: true,
            }),
            platform_express_1.MulterModule.register({
                dest: './uploads',
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map