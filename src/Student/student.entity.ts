import { ApplicationEntity } from "src/Applications/application.entity";
import { CertificateEntity } from "src/Certificate/certificate.entity";
import { Column,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Student")
export class StudentEntity {

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

  @Column({ nullable: true })
  CV: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(() => CertificateEntity, certificate => certificate.student)
  certificates: CertificateEntity[];

  @OneToMany(() => ApplicationEntity, application => application.student)
  applications: ApplicationEntity[];

}
