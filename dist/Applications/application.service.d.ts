import { Repository } from 'typeorm';
import { PositionEntity } from 'src/Position/position.entity';
import { ApplicationEntity } from './application.entity';
import { StudentEntity } from 'src/Student/student.entity';
export declare class ApplicationService {
    private readonly positionRepository;
    private readonly appRepo;
    private readonly stuRepo;
    constructor(positionRepository: Repository<PositionEntity>, appRepo: Repository<ApplicationEntity>, stuRepo: Repository<StudentEntity>);
    createPosition(studentUsername: string, positionId: number): Promise<ApplicationEntity>;
    getAllApplications(): Promise<ApplicationEntity[]>;
    blockStudentByUsername(username: number): Promise<ApplicationEntity>;
}
