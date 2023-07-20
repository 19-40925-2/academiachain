import { ApplicationEntity } from 'src/Applications/application.entity';
import { ProfessorEntity } from 'src/Professor/professor.entity';
export declare class PositionEntity {
    id: number;
    title: string;
    description: string;
    requirements: string;
    department: string;
    location: string;
    salary: number;
    professor: ProfessorEntity;
    applications: ApplicationEntity[];
}
