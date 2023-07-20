import { ConflictException, Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PositionEntity } from './position.entity';
import { PositionDto } from './DTO/position.dto';
import { ProfessorEntity } from 'src/Professor/professor.entity';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(PositionEntity)
    private readonly positionRepository: Repository<PositionEntity>,

    @InjectRepository(ProfessorEntity)
    private readonly professorRepository: Repository<ProfessorEntity>,
    
  ) {}

  async getAllStudents(): Promise<PositionEntity[]> {
    return this.positionRepository.find({
      relations: ['professor'],
    });
  }

  searchById(id: any): any {
    const queryBuilder = this.positionRepository.createQueryBuilder('position')
      .leftJoinAndSelect('position.professor', 'professor')
      .where('position.id = :id', { id })
      .getOne();
  
    if (queryBuilder) {
      return queryBuilder;
    } else {
      return 'No matches found for this ID in the database!';
    }
  }
  

  async createPosition(professorUsername: string, positionDto: PositionDto): Promise<PositionEntity> {
    const existingUsername = await this.professorRepository.findOne({ where: { Username: professorUsername } });
    if (!existingUsername) {
      throw new ConflictException('Professor not exist');
    }

    const create = new PositionEntity();
    create.department = positionDto.department;
    create.description = positionDto.description;
    create.location = positionDto.location;
    create.professor = existingUsername;
    create.requirements = positionDto.requirements;
    create.salary = positionDto.salary;
    create.title = positionDto.title;
    return this.positionRepository.save(create);
  }

}
