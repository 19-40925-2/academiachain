import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { ProfessorEntity } from "./professor.entity";
import { ProfessorDTO } from "./DTO/professor.dto";
import { StudentEntity } from "src/Student/student.entity";

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(ProfessorEntity)
    private readonly professorRepository: Repository<ProfessorEntity>,

    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  getIndex(): any {
    return 'hello';
  }

  async getAllStudents(): Promise<ProfessorEntity[]> {
    return this.professorRepository.find();
  }

  async findStudent(searchKey: string): Promise<ProfessorEntity> {
    const student = await this.professorRepository.findOne({
      where: [
        { Firstname: searchKey },
        { Lastname: searchKey },
        { Username: searchKey },
      ],
    });
    return student;
  }


  async findStudentUsername(searchKey: string): Promise<ProfessorEntity> {
    const student = await this.professorRepository.findOne({
      where: [
        { Username: searchKey }
      ],
    });
    return student;
  }


  async login(username, password){
    const mydata= await this.professorRepository.findOneBy({Username: username});
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

  searchById(id):any{
    const ext = this.professorRepository.findOneBy({ Id:id });
    if(ext){
        return ext;
    }
    else
        return "No matches found for this ID in database!"; // Need to implement
}

  async signup(studentDTO: ProfessorDTO): Promise<ProfessorEntity> {
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
  
    // Check if the Phone number already exists
    const existingPhone = await this.professorRepository.findOne({ where: { Phone } });
    if (existingPhone) {
      throw new ConflictException('Phone number already exists');
    }
  
    // Check if the Email already exists
    const existingEmail = await this.professorRepository.findOne({ where: { Email } });
    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }
  
    return this.professorRepository.save(studentDTO);
  }

  async updateProfileByUsername(username: string, updatedProfile: Partial<ProfessorEntity>): Promise<ProfessorEntity> {
    const existingStudent = await this.professorRepository.findOne({ where: { Username: username } });
  
    if (!existingStudent) {
      throw new NotFoundException('Student not found');
    }
  
    Object.assign(existingStudent, updatedProfile);
  
    return this.professorRepository.save(existingStudent);
  }

  async deleteStudentByUsername(username: string): Promise<void> {
    const existingStudent = await this.professorRepository.findOne({ where: { Username: username } });
  
    if (!existingStudent) {
      throw new NotFoundException('Student not found');
    }
  
    await this.professorRepository.remove(existingStudent);
  }
  
  async blockStudentByUsername(username: string): Promise<ProfessorEntity> {
    const existingStudent = await this.professorRepository.findOne({ where: { Username: username } });
  
    if (!existingStudent) {
      throw new NotFoundException('Student not found');
    }
  
    existingStudent.Blocked = true;
  
    return this.professorRepository.save(existingStudent);
  }

  async unblockStudentByUsername(username: string): Promise<ProfessorEntity> {
    const existingStudent = await this.professorRepository.findOne({ where: { Username: username } });
  
    if (!existingStudent) {
      throw new NotFoundException('Student not found');
    }
  
    existingStudent.Blocked = false;
  
    return this.professorRepository.save(existingStudent);
  }
  
  



}