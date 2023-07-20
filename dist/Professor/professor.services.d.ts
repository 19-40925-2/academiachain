import { Repository } from 'typeorm';
import { ProfessorEntity } from "./professor.entity";
import { ProfessorDTO } from "./DTO/professor.dto";
import { StudentEntity } from "src/Student/student.entity";
export declare class ProfessorService {
    private readonly professorRepository;
    private readonly studentRepository;
    constructor(professorRepository: Repository<ProfessorEntity>, studentRepository: Repository<StudentEntity>);
    getIndex(): any;
    getAllStudents(): Promise<ProfessorEntity[]>;
    findStudent(searchKey: string): Promise<ProfessorEntity>;
    findStudentUsername(searchKey: string): Promise<ProfessorEntity>;
    login(username: any, password: any): Promise<1 | 0>;
    searchById(id: any): any;
    signup(studentDTO: ProfessorDTO): Promise<ProfessorEntity>;
    updateProfileByUsername(username: string, updatedProfile: Partial<ProfessorEntity>): Promise<ProfessorEntity>;
    deleteStudentByUsername(username: string): Promise<void>;
    blockStudentByUsername(username: string): Promise<ProfessorEntity>;
    unblockStudentByUsername(username: string): Promise<ProfessorEntity>;
}
