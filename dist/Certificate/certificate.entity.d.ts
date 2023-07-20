import { StudentEntity } from 'src/Student/student.entity';
import { UniversityEntity } from 'src/University/university.entity';
export declare class CertificateEntity {
    id: number;
    name: string;
    cgpa: number;
    graduationYear: number;
    enrollmentYear: number;
    filename: string;
    university: UniversityEntity;
    student: StudentEntity;
    isVerified: boolean;
}
