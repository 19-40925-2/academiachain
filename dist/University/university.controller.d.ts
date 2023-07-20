/// <reference types="multer" />
import { UniversityService } from "./university.service";
import { UniversityDTO } from "./DTO/university.dto";
export declare class UniversityController {
    uniService: UniversityService;
    constructor(uniService: UniversityService);
    Index(): any;
    getAllStudent(): any;
    findStudent(searchKey: string): Promise<import("./university.entity").UniversityEntity>;
    addModerator(session: any, username: string, password: string): Promise<{
        message: string;
    }>;
    signup(mydto: UniversityDTO, file: Express.Multer.File): Promise<import("./university.entity").UniversityEntity>;
    getImages(name: any, res: any): void;
    getImages1(name: any, res: any): void;
}
