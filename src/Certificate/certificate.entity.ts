import { StudentEntity } from 'src/Student/student.entity';
import { UniversityEntity } from 'src/University/university.entity';
import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Certificate')
export class CertificateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 5, scale: 2 })
  cgpa: number;

  @Column()
  graduationYear: number;

  @Column()
  enrollmentYear: number;

  @Column()
  filename: string;

  @ManyToOne(() => UniversityEntity, (university) => university.certificate)
  university: UniversityEntity

  @ManyToOne(() => StudentEntity, student => student.certificates)
  student: StudentEntity


  @Column({ default: false })
  isVerified: boolean;
}

