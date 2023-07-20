import { Repository } from 'typeorm';
import { StudentEntity } from "./student.entity";
import { StudentDTO } from "./DTO/student.dto";
export declare class StudentService {
    private readonly studentRepository;
    private readonly professorRepository;
    constructor(studentRepository: Repository<StudentEntity>, professorRepository: Repository<StudentEntity>);
    getIndex(): any;
    getAllStudents(): Promise<StudentEntity[]>;
    findStudent(searchKey: string): Promise<StudentEntity>;
    searchById(id: any): any;
    findStudentUsername(searchKey: string): Promise<StudentEntity>;
    signup(studentDTO: StudentDTO): Promise<StudentEntity>;
    cvUpload(filename: string, username: string): Promise<string>;
    login(username: any, password: any): Promise<1 | 0>;
    updateProfileByUsername(username: string, updatedProfile: Partial<StudentDTO>): Promise<StudentEntity>;
    deleteStudentByUsername(username: string): Promise<void>;
    blockStudentByUsername(username: string): Promise<StudentEntity>;
    unblockStudentByUsername(username: string): Promise<StudentEntity>;
}
