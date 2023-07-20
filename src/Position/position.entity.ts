import { ApplicationEntity } from 'src/Applications/application.entity';
import { ProfessorEntity } from 'src/Professor/professor.entity';
import { Column, Entity, ManyToOne,OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Position')
export class PositionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  requirements: string;

  @Column()
  department: string;

  @Column()
  location: string;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  salary: number;  

  @ManyToOne(() => ProfessorEntity, professor => professor.positions)
  professor: ProfessorEntity;

  @OneToMany(() => ApplicationEntity, application => application.position)
  applications: ApplicationEntity[];
}
