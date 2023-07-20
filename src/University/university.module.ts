import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfessorEntity } from "src/Professor/professor.entity";
import { StudentEntity } from "src/Student/student.entity";
import { UniversityEntity } from "./university.entity";
import { UniversityController } from "./university.controller";
import { UniversityService } from "./university.service";
import { CertificateEntity } from "src/Certificate/certificate.entity";


@Module(
    {
        imports: [TypeOrmModule.forFeature([ProfessorEntity, StudentEntity, UniversityEntity, CertificateEntity])],
        controllers: [UniversityController], 
        providers: [UniversityService]

    }
)
export class UniversityModule {}