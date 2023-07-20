import { PositionService } from './position.service';
import { PositionDto } from './DTO/position.dto';
import { PositionEntity } from './position.entity';
export declare class PositionController {
    private readonly positionService;
    constructor(positionService: PositionService);
    createPost(professorUsername: string, positionDto: PositionDto): Promise<PositionEntity>;
    getAllStudent(): any;
    searchById(id: number): any;
}
