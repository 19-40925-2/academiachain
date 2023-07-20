import { Repository } from 'typeorm';
import { StudentEntity } from "src/Student/student.entity";
import { ProfessorEntity } from "src/Professor/professor.entity";
import { UniversityEntity } from "src/University/university.entity";
import { CertificateEntity } from "./certificate.entity";
import { CertificateDTO } from "./DTO/certificate.dto";
export declare class CertificateService {
    private readonly professorRepository;
    private readonly studentRepository;
    private readonly universityRepository;
    private readonly certificateRepo;
    constructor(professorRepository: Repository<ProfessorEntity>, studentRepository: Repository<StudentEntity>, universityRepository: Repository<UniversityEntity>, certificateRepo: Repository<CertificateEntity>);
    getIndex(): any;
    getAllStudents(): Promise<CertificateEntity[]>;
    findStudent(searchKey: string): Promise<UniversityEntity>;
    signup(studentDTO: CertificateDTO, studentUsername: any): Promise<CertificateEntity>;
    blockStudentByUsername(username: number): Promise<CertificateEntity>;
}
