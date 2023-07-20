import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './Student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { ProfessorModule } from './Professor/professor.module';
import { UniversityModule } from './University/university.module';
import { CertificateModule } from './Certificate/certificate.module';
import { PositionModule } from './Position/position.module';
import { ApplicationModule } from './Applications/application.module';

@Module({
  imports: [
    StudentModule, ProfessorModule, UniversityModule, CertificateModule, PositionModule, ApplicationModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '112233',
      database: 'academiachainv1.2',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

