import { Body, Controller, FileTypeValidator, Get, Param, ParseFilePipe, Post, UploadedFile, UseInterceptors, HttpException, HttpStatus, Put, Delete, ParseIntPipe, Session } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { Express } from 'express';
import { ProfessorService } from "./professor.services";
import { ProfessorDTO } from "./DTO/professor.dto";
import { ProfessorEntity } from "./professor.entity";

@Controller("/api/professor")
export class ProfessorController {
  constructor(public professorService: ProfessorService) {}

  @Get("/index")
  Index(): any {
    console.log('Submitted Data:');
    return this.professorService.getIndex();
  }

  @Get('/getAllProff')
  getAllStudent(): any {
    return this.professorService.getAllStudents();
  }

  @Get("/search/:id")
    searchById(@Param('id', ParseIntPipe) id:number){
        return this.professorService.searchById(id);
    }

  @Get('find/:searchKey')
  async findStudent(@Param('searchKey') searchKey: string) {
    return this.professorService.findStudent(searchKey);
  }

  @Get('/search1/:searchKey')
  async findStudentUsername(@Param('searchKey') searchKey: string) {
    return this.professorService.findStudentUsername(searchKey);
  }

  @Post('/register')
    @UseInterceptors(FileInterceptor('myfile',
    {storage:diskStorage({
      destination: './uploads',
      filename: function (req, file, cb) {
        cb(null,Date.now()+file.originalname)
      }
    })
    }))
    signup(@Body() mydto:ProfessorDTO,@UploadedFile(new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
      ],
    }),) file: Express.Multer.File){
    
        mydto.filename = file.filename;  
        mydto.Blocked = false;
        mydto.createdAt = new Date();
        mydto.updatedAt = new Date();
        return this.professorService.signup(mydto);
    }


    @Put('/updateProfile/:username')
    async updateProfile(
    @Param('username') username: string,
    @Body() updatedProfile: Partial<ProfessorDTO>,
    ): Promise<ProfessorEntity> {
    return this.professorService.updateProfileByUsername(username, updatedProfile);
    }

    @Delete('/delete/:username')
    async deleteStudent(@Param('username') username: string): Promise<void> {
    await this.professorService.deleteStudentByUsername(username);
    }

    @Put('/block/:username')
    async blockStudent(@Param('username') username: string): Promise<ProfessorEntity> {
    return this.professorService.blockStudentByUsername(username);
    }

    @Put('/unblock/:username')
    async unblockStudent(@Param('username') username: string): Promise<ProfessorEntity> {
    return this.professorService.unblockStudentByUsername(username);
    }


    @Put("/login")
    async addModerator( @Session() session,
        @Body("username") username:string,
        @Body("password") password:string
    ){
        if(await this.professorService.login(username, password) == 1){
            return {message:"Successfully logged"};
        }
        else{
            return {message:"Invalid username or password"};
        }
    }


}
