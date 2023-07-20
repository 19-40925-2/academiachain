import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfessorEntity } from "src/Professor/professor.entity";
import { StudentEntity } from "src/Student/student.entity";
import { CertificateEntity } from "./certificate.entity";
import { CertificateController } from "./certificate.controller";
import { CertificateService } from "./certificate.services";
import { UniversityEntity } from "src/University/university.entity";


@Module(
    {
        imports: [TypeOrmModule.forFeature([CertificateEntity,ProfessorEntity, StudentEntity, UniversityEntity])],
        controllers: [CertificateController], 
        providers: [CertificateService]

    }
)
export class CertificateModule {}