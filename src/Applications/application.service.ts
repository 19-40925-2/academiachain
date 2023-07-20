import { ConflictException, Get, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PositionEntity } from 'src/Position/position.entity';
import { ApplicationEntity } from './application.entity';
import { StudentEntity } from 'src/Student/student.entity';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(PositionEntity)
    private readonly positionRepository: Repository<PositionEntity>,

    @InjectRepository(ApplicationEntity)
    private readonly appRepo: Repository<ApplicationEntity>,

    @InjectRepository(StudentEntity)
    private readonly stuRepo: Repository<StudentEntity>,
    
  ) {}


  async createPosition(studentUsername: string, positionId: number): Promise<ApplicationEntity> {
    const existingUsername = await this.stuRepo.findOne({ where: { Username: studentUsername } });
    if (!existingUsername) {
      throw new ConflictException('Student not exist');
    }

    const position = await this.positionRepository.findOne({ where: { id: positionId } });
    if (!position) {
      throw new ConflictException('Position not exist');
    }


    const create = new ApplicationEntity();
    create.position = position;
    create.student = existingUsername;
    return this.appRepo.save(create);
  }

  async getAllApplications() {
    return this.appRepo.find({
      relations: ['position', 'position.professor', 'student'],
    });
  }


  async blockStudentByUsername(username: number): Promise<ApplicationEntity> {
    const existingStudent = await this.appRepo.findOne({ where: { id: username } });
  
    if (!existingStudent) {
      throw new NotFoundException('Student not found');
    }
  
    existingStudent.isAccpected = true;
  
    return this.appRepo.save(existingStudent);
  }

  
  
}
