/// <reference types="multer" />
import { StudentService } from "./student.service";
import { StudentDTO } from "./DTO/student.dto";
import { StudentEntity } from "./student.entity";
export declare class StudentController {
    studentService: StudentService;
    constructor(studentService: StudentService);
    Index(): any;
    getAllStudent(): any;
    searchById(id: number): any;
    findStudent(searchKey: string): Promise<StudentEntity>;
    findStudentUsername(searchKey: string): Promise<StudentEntity>;
    signout(session: any): {
        message: string;
    };
    addModerator(session: any, username: string, password: string): Promise<{
        message: string;
    }>;
    signup(mydto: StudentDTO, file: Express.Multer.File): Promise<StudentEntity>;
    uploadCv(username: string, cv: Express.Multer.File): Promise<string>;
    updateProfile(username: string, updatedProfile: Partial<StudentDTO>): Promise<StudentEntity>;
    deleteStudent(username: string): Promise<void>;
    blockStudent(username: string): Promise<StudentEntity>;
    unblockStudent(username: string): Promise<StudentEntity>;
}
