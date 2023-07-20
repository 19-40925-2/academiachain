import { Module } from '@nestjs/common';
import { PositionController } from './position.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionEntity } from './position.entity';
import { ProfessorEntity } from 'src/Professor/professor.entity';
import { PositionService } from './position.service';
import { ApplicationEntity } from 'src/Applications/application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PositionEntity, ProfessorEntity, ApplicationEntity])],
  controllers: [PositionController],
  providers: [PositionService],
})
export class PositionModule {}
