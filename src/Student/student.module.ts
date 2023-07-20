import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentController } from "./student.controller";
import { StudentService } from "./student.service";
import { StudentEntity } from "./student.entity";
import { ProfessorEntity } from "src/Professor/professor.entity";
import { CertificateEntity } from "src/Certificate/certificate.entity";
import { ApplicationEntity } from "src/Applications/application.entity";


@Module(
    {
        imports: [TypeOrmModule.forFeature([StudentEntity, ProfessorEntity, CertificateEntity, ApplicationEntity])],
        controllers: [StudentController], 
        providers: [StudentService]

    }
)
export class StudentModule {}