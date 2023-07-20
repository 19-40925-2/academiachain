import { Repository } from 'typeorm';
import { StudentEntity } from "src/Student/student.entity";
import { ProfessorEntity } from "src/Professor/professor.entity";
import { UniversityDTO } from "./DTO/university.dto";
import { UniversityEntity } from "./university.entity";
export declare class UniversityService {
    private readonly professorRepository;
    private readonly studentRepository;
    private readonly universityRepository;
    constructor(professorRepository: Repository<ProfessorEntity>, studentRepository: Repository<StudentEntity>, universityRepository: Repository<UniversityEntity>);
    getIndex(): any;
    getAllStudents(): Promise<UniversityEntity[]>;
    findStudent(searchKey: string): Promise<UniversityEntity>;
    signup(studentDTO: UniversityDTO): Promise<UniversityEntity>;
    login(username: any, password: any): Promise<1 | 0>;
}
