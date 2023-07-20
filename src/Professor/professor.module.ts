import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfessorEntity } from "./professor.entity";
import { ProfessorController } from "./professor.controller";
import { ProfessorService } from "./professor.services";
import { StudentEntity } from "src/Student/student.entity";
import { PositionEntity } from "src/Position/position.entity";


@Module(
    {
        imports: [TypeOrmModule.forFeature([ProfessorEntity, StudentEntity, PositionEntity])],
        controllers: [ProfessorController], 
        providers: [ProfessorService]

    }
)
export class ProfessorModule {}