import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { StudentEntity } from "src/Student/student.entity";
import { ProfessorEntity } from "src/Professor/professor.entity";
import { UniversityEntity } from "src/University/university.entity";
import { CertificateEntity } from "./certificate.entity";
import { CertificateDTO } from "./DTO/certificate.dto";

@Injectable()
export class CertificateService {
  constructor(
    @InjectRepository(ProfessorEntity)
    private readonly professorRepository: Repository<ProfessorEntity>,

    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,

    @InjectRepository(UniversityEntity)
    private readonly universityRepository: Repository<UniversityEntity>,

    @InjectRepository(CertificateEntity)
    private readonly certificateRepo: Repository<CertificateEntity>,
  ) {}

  getIndex(): any {
    return 'hello';
  }

  async getAllStudents(): Promise<CertificateEntity[]> {
    return this.certificateRepo.find({
      relations: ['university', 'student'],
    });
  }
  

  async findStudent(searchKey: string): Promise<UniversityEntity> {
    const student = await this.universityRepository.findOne({
      where: [
        { Username: searchKey },
      ],
    });
    return student;
  }

  async signup(studentDTO: CertificateDTO, studentUsername): Promise<CertificateEntity> {
  
    // Check if the Username already exists
    const existingUsername = await this.studentRepository.findOne({ where: {Username: studentUsername } });
    if (!existingUsername) {
      throw new ConflictException('Student username already not exists');
    }
    
    const existingUsernameUni = await this.universityRepository.findOne({ where: { Username: studentDTO.universityUsername } });
    if (!existingUsernameUni) {
      throw new ConflictException('University username not eist');
    }
    const cer = new CertificateEntity();
    cer.cgpa = studentDTO.cgpa;
    cer.enrollmentYear = studentDTO.enrollmentYear;
    cer.graduationYear = studentDTO.graduationYear;
    cer.isVerified = false;
    cer.name = studentDTO.name;
    cer.student = existingUsername;
    cer.university = existingUsernameUni;
    cer.filename = studentDTO.fileName;
    return this.certificateRepo.save(cer);
  }


  async blockStudentByUsername(username: number): Promise<CertificateEntity> {
    const existingStudent = await this.certificateRepo.findOne({ where: { id: username } });
  
    if (!existingStudent) {
      throw new NotFoundException('Certificate not found');
    }
  
    existingStudent.isVerified = true;
  
    return this.certificateRepo.save(existingStudent);
  }
  

}