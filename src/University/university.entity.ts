import { CertificateEntity } from "src/Certificate/certificate.entity";
import { Column, OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("University")
export class UniversityEntity {

  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Name: string;

  @Column()
  Stb: Date;

  @Column()
  Email: string;

  @Column()
  Phone: string;

  @Column()
  Username: string;

  @Column()
  Password: string;

  @Column()
  filename: string;

  @Column()
  Country: string;

  @OneToMany(() => CertificateEntity, (certificate) => certificate.university)
  certificate: CertificateEntity[]

}
