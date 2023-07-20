import { Repository } from 'typeorm';
import { PositionEntity } from './position.entity';
import { PositionDto } from './DTO/position.dto';
import { ProfessorEntity } from 'src/Professor/professor.entity';
export declare class PositionService {
    private readonly positionRepository;
    private readonly professorRepository;
    constructor(positionRepository: Repository<PositionEntity>, professorRepository: Repository<ProfessorEntity>);
    getAllStudents(): Promise<PositionEntity[]>;
    searchById(id: any): any;
    createPosition(professorUsername: string, positionDto: PositionDto): Promise<PositionEntity>;
}
