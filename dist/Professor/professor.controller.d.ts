/// <reference types="multer" />
import { ProfessorService } from "./professor.services";
import { ProfessorDTO } from "./DTO/professor.dto";
import { ProfessorEntity } from "./professor.entity";
export declare class ProfessorController {
    professorService: ProfessorService;
    constructor(professorService: ProfessorService);
    Index(): any;
    getAllStudent(): any;
    searchById(id: number): any;
    findStudent(searchKey: string): Promise<ProfessorEntity>;
    findStudentUsername(searchKey: string): Promise<ProfessorEntity>;
    signup(mydto: ProfessorDTO, file: Express.Multer.File): Promise<ProfessorEntity>;
    updateProfile(username: string, updatedProfile: Partial<ProfessorDTO>): Promise<ProfessorEntity>;
    deleteStudent(username: string): Promise<void>;
    blockStudent(username: string): Promise<ProfessorEntity>;
    unblockStudent(username: string): Promise<ProfessorEntity>;
    addModerator(session: any, username: string, password: string): Promise<{
        message: string;
    }>;
}
