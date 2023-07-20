import { PositionEntity } from 'src/Position/position.entity';
import { StudentEntity } from 'src/Student/student.entity';
export declare class ApplicationEntity {
    id: number;
    timestamp: Date;
    isAccpected: boolean;
    position: PositionEntity;
    student: StudentEntity;
}
