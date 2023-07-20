import { PositionEntity } from 'src/Position/position.entity';
import { StudentEntity } from 'src/Student/student.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('Application')
@Unique(['position', 'student'])
export class ApplicationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  timestamp: Date;

  @Column({ default: false })
  isAccpected: boolean;

  @ManyToOne(() => PositionEntity, position => position.applications)
  position: PositionEntity;

  @ManyToOne(() => StudentEntity, student => student.applications)
  student: StudentEntity;
}
