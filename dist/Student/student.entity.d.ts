import { ApplicationEntity } from "src/Applications/application.entity";
import { CertificateEntity } from "src/Certificate/certificate.entity";
export declare class StudentEntity {
    Id: number;
    Firstname: string;
    Lastname: string;
    DOB: Date;
    Email: string;
    Phone: string;
    Username: string;
    Password: string;
    Blocked: boolean;
    filename: string;
    AboutMe: string;
    Address: string;
    Country: string;
    University: string;
    CV: string;
    createdAt: Date;
    updatedAt: Date;
    certificates: CertificateEntity[];
    applications: ApplicationEntity[];
}
