import { PositionEntity } from "src/Position/position.entity";
import { OneToMany, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Professor")
export class ProfessorEntity {

  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Firstname: string;

  @Column()
  Lastname: string;

  @Column()
  DOB: Date;

  @Column()
  Email: string;

  @Column()
  Phone: string;

  @Column()
  Username: string;

  @Column()
  Password: string;

  @Column()
  Blocked: boolean;

  @Column()
  filename: string;

  // Additional fields
  @Column()
  AboutMe: string;

  @Column()
  Address: string;

  @Column()
  Country: string;

  @Column()
  University: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(() => PositionEntity, position => position.professor)
  positions: PositionEntity[];
  
}
