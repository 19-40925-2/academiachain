import { PositionEntity } from "src/Position/position.entity";
export declare class ProfessorEntity {
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
    createdAt: Date;
    updatedAt: Date;
    positions: PositionEntity[];
}
