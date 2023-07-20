import { CertificateEntity } from "src/Certificate/certificate.entity";
export declare class UniversityEntity {
    Id: number;
    Name: string;
    Stb: Date;
    Email: string;
    Phone: string;
    Username: string;
    Password: string;
    filename: string;
    Country: string;
    certificate: CertificateEntity[];
}
