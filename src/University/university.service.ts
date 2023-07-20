import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { StudentEntity } from "src/Student/student.entity";
import { ProfessorEntity } from "src/Professor/professor.entity";
import { UniversityDTO } from "./DTO/university.dto";
import { UniversityEntity } from "./university.entity";

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(ProfessorEntity)
    private readonly professorRepository: Repository<ProfessorEntity>,

    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,

    @InjectRepository(UniversityEntity)
    private readonly universityRepository: Repository<UniversityEntity>,
  ) {}

  getIndex(): any {
    return 'hello';
  }

  async getAllStudents(): Promise<UniversityEntity[]> {
    return this.universityRepository.find();
  }

  async findStudent(searchKey: string): Promise<UniversityEntity> {
    const student = await this.universityRepository.findOne({
      where: [
        { Username: searchKey },
      ],
    });
    return student;
  }

  async signup(studentDTO: UniversityDTO): Promise<UniversityEntity> {
    const { Username, Phone, Email } = studentDTO;
  
    // Check if the Username already exists
    const existingUsername = await this.professorRepository.findOne({ where: { Username } });
    if (existingUsername) {
      throw new ConflictException('Username already exists');
    }

    const existingUsernamesTUDENT = await this.studentRepository.findOne({ where: { Username } });
    if (existingUsernamesTUDENT) {
      throw new ConflictException('Username already exists');
    }

    const existingUsernameUni = await this.universityRepository.findOne({ where: { Username } });
    if (existingUsernameUni) {
      throw new ConflictException('Username already exists');
    }
  
    // Check if the Phone number already exists
    const existingPhone = await this.universityRepository.findOne({ where: { Phone } });
    if (existingPhone) {
      throw new ConflictException('Phone number already exists');
    }
  
    // Check if the Email already exists
    const existingEmail = await this.universityRepository.findOne({ where: { Email } });
    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }
  
    return this.universityRepository.save(studentDTO);
  }


  async login(username, password){
    const mydata= await this.universityRepository.findOneBy({Username: username});
    if(mydata){
        if(mydata.Password == password) {
            return 1;
        }
        else {
            return 0;
        }
    }
    else
        return 0;
}
  
  



}