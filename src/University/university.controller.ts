import { Body, Controller, FileTypeValidator, Get, Param, ParseFilePipe, Post, UploadedFile, UseInterceptors, HttpException, HttpStatus, Put, Delete, Res, Session } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { Express } from 'express';
import { UniversityService } from "./university.service";
import { UniversityDTO } from "./DTO/university.dto";

@Controller("/api/uni")
export class UniversityController {
  constructor(public uniService: UniversityService) {}

  @Get("/index")
  Index(): any {
    console.log('Submitted Data:');
    return this.uniService.getIndex();
  }

  @Get('/allUni')
  getAllStudent(): any {
    return this.uniService.getAllStudents();
  }

  @Get('find/:searchKey')
  async findStudent(@Param('searchKey') searchKey: string) {
    return this.uniService.findStudent(searchKey);
  }


  @Put("/login")
  async addModerator( @Session() session,
      @Body("username") username:string,
      @Body("password") password:string
  ){
      if(await this.uniService.login(username, password) == 1){
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
    signup(@Body() mydto:UniversityDTO,@UploadedFile(new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
      ],
    }),) file: Express.Multer.File){
    
        mydto.filename = file.filename;  
        return this.uniService.signup(mydto);
    }
    
    @Get('/getimage/:name')
    getImages(@Param('name') name, @Res() res) {
      res.sendFile(name,{ root: './uploads' })
    }

    @Get('/getimage1/:name')
    getImages1(@Param('name') name, @Res() res) {
      res.sendFile(name,{ root: './cv' })
    }
    
}
