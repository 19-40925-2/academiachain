import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { StudentEntity } from "./student.entity";
import { StudentDTO } from "./DTO/student.dto";
import { ProfessorEntity } from "src/Professor/professor.entity";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,

    @InjectRepository(ProfessorEntity)
    private readonly professorRepository: Repository<StudentEntity>,
  ) {}

  getIndex(): any {
    return 'hello';
  }

  async getAllStudents(): Promise<StudentEntity[]> {
    return this.studentRepository.find();
  }

  async findStudent(searchKey: string): Promise<StudentEntity> {
    const student = await this.studentRepository.findOne({
      where: [
        { Firstname: searchKey },
        { Lastname: searchKey },
        { Username: searchKey },
      ],
    });
    return student;
  }


  searchById(id):any{
    const ext = this.studentRepository.findOneBy({ Id:id });
    if(ext){
        return ext;
    }
    else
        return "No matches found for this ID in database!"; // Need to implement
}

  async findStudentUsername(searchKey: string): Promise<StudentEntity> {
    const student = await this.studentRepository.findOne({
      where: [
        { Username: searchKey }
      ],
    });
    return student;
  }


  async signup(studentDTO: StudentDTO): Promise<StudentEntity> {
    const { Username, Phone, Email } = studentDTO;
  
    // Check if the Username already exists
    const existingUsername = await this.studentRepository.findOne({ where: { Username } });
    if (existingUsername) {
      throw new ConflictException('Username already exists');
    }

    const existingUsernameProff = await this.professorRepository.findOne({ where: { Username } });
    if (existingUsernameProff) {
      throw new ConflictException('Username already exists');
    }
  
    // Check if the Phone number already exists
    const existingPhone = await this.studentRepository.findOne({ where: { Phone } });
    if (existingPhone) {
      throw new ConflictException('Phone number already exists');
    }
  
    // Check if the Email already exists
    const existingEmail = await this.studentRepository.findOne({ where: { Email } });
    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }
  
    return this.studentRepository.save(studentDTO);
  }

  async cvUpload(filename: string, username: string): Promise<string> {
    const student = await this.studentRepository.findOne({ where: { Username: username } });

    if (student) {
      student.CV = filename;
      await this.studentRepository.save(student);
      return 'CV uploaded successfully';
    } else {
      return 'Username not found';
    }
  }

    async login(username, password){
      const mydata= await this.studentRepository.findOneBy({Username: username});
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

  async updateProfileByUsername(username: string, updatedProfile: Partial<StudentDTO>): Promise<StudentEntity> {
    const existingStudent = await this.studentRepository.findOne({ where: { Username: username } });
  
    if (!existingStudent) {
      throw new NotFoundException('Student not found');
    }
  
    Object.assign(existingStudent, updatedProfile);
  
    return this.studentRepository.save(existingStudent);
  }

  async deleteStudentByUsername(username: string): Promise<void> {
    const existingStudent = await this.studentRepository.findOne({ where: { Username: username } });
  
    if (!existingStudent) {
      throw new NotFoundException('Student not found');
    }
  
    await this.studentRepository.remove(existingStudent);
  }
  
  async blockStudentByUsername(username: string): Promise<StudentEntity> {
    const existingStudent = await this.studentRepository.findOne({ where: { Username: username } });
  
    if (!existingStudent) {
      throw new NotFoundException('Student not found');
    }
  
    existingStudent.Blocked = true;
  
    return this.studentRepository.save(existingStudent);
  }

  async unblockStudentByUsername(username: string): Promise<StudentEntity> {
    const existingStudent = await this.studentRepository.findOne({ where: { Username: username } });
  
    if (!existingStudent) {
      throw new NotFoundException('Student not found');
    }
  
    existingStudent.Blocked = false;
  
    return this.studentRepository.save(existingStudent);
  }
  
  



}