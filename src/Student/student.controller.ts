import { Body, Controller, FileTypeValidator, Get, Param, ParseFilePipe, Post, UploadedFile, UseInterceptors, HttpException, HttpStatus, Put, Delete, Session, UnauthorizedException, ParseIntPipe } from "@nestjs/common";
import { StudentService } from "./student.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { StudentDTO } from "./DTO/student.dto";
import { Express } from 'express';
import { StudentEntity } from "./student.entity";

@Controller("/api/student")
export class StudentController {
  constructor(public studentService: StudentService) {}

  @Get("/index")
  Index(): any {
    console.log('Submitted Data:');
    return this.studentService.getIndex();
  }

  @Get('/getAllStudent')
  getAllStudent(): any {
    return this.studentService.getAllStudents();
  }

  @Get("/search/:id")
  searchById(@Param('id', ParseIntPipe) id:number){
      return this.studentService.searchById(id);
  }

  @Get('/find/:searchKey')
  async findStudent(@Param('searchKey') searchKey: string) {
    return this.studentService.findStudent(searchKey);
  }

  @Get('/search1/:searchKey')
  async findStudentUsername(@Param('searchKey') searchKey: string) {
    return this.studentService.findStudentUsername(searchKey);
  }

  @Get('/logout')
  signout(@Session() session)
  {
      
    return {message:"you are logged out"};
      
  }

  @Put("/login")
  async addModerator( @Session() session,
      @Body("username") username:string,
      @Body("password") password:string
  ){
      if(await this.studentService.login(username, password) == 1){
          return {message:"Successfully logged"};
      }
      else{
          return {message:"Invalid username or password"};
      }
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
    signup(@Body() mydto:StudentDTO,@UploadedFile(new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
      ],
    }),) file: Express.Multer.File){
    
        mydto.filename = file.filename;  
        mydto.Blocked = false;
        mydto.createdAt = new Date();
        mydto.updatedAt = new Date();
        mydto.CV = null;
        return this.studentService.signup(mydto);
    }

    @Post('/cv/upload/:username')
    @UseInterceptors(FileInterceptor('cv',
    {storage:diskStorage({
      destination: './cv',
      filename: function (req, file, cb) {
        cb(null,Date.now()+file.originalname)
      }
    })
    }))
    async uploadCv(
        @Param('username') username: string,
        @UploadedFile() cv: Express.Multer.File,
      ): Promise<string> {

        return this.studentService.cvUpload(cv.filename, username);
    }


    @Put('/updateProfile/:username')
    async updateProfile(
    @Param('username') username: string,
    @Body() updatedProfile: Partial<StudentDTO>,
    ): Promise<StudentEntity> {
    return this.studentService.updateProfileByUsername(username, updatedProfile);
    }

    @Delete('/delete/:username')
    async deleteStudent(@Param('username') username: string): Promise<void> {
    await this.studentService.deleteStudentByUsername(username);
    }

    @Put('/block/:username')
    async blockStudent(@Param('username') username: string): Promise<StudentEntity> {
    return this.studentService.blockStudentByUsername(username);
    }

    @Put('/unblock/:username')
    async unblockStudent(@Param('username') username: string): Promise<StudentEntity> {
    return this.studentService.unblockStudentByUsername(username);
    }


}
