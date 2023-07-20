/// <reference types="multer" />
import { CertificateService } from "./certificate.services";
import { CertificateDTO } from "./DTO/certificate.dto";
import { CertificateEntity } from "./certificate.entity";
export declare class CertificateController {
    certificateService: CertificateService;
    constructor(certificateService: CertificateService);
    Index(): any;
    getAllStudent(): any;
    findStudent(searchKey: string): Promise<import("../University/university.entity").UniversityEntity>;
    signup(mydto: CertificateDTO, file: Express.Multer.File, studentUsername: string): Promise<CertificateEntity>;
    blockStudent(username: number): Promise<CertificateEntity>;
}
