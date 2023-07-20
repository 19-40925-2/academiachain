import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationEntity } from 'src/Applications/application.entity';
import { PositionEntity } from 'src/Position/position.entity';
import { StudentEntity } from 'src/Student/student.entity';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';

@Module({
  imports: [TypeOrmModule.forFeature([PositionEntity, ApplicationEntity, StudentEntity])],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
