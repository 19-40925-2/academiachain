import { Body, Controller, FileTypeValidator, Get, Param, ParseFilePipe, Post, UploadedFile, UseInterceptors, HttpException, HttpStatus, Put, Delete } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { Express } from 'express';
import { CertificateService } from "./certificate.services";
import { CertificateDTO } from "./DTO/certificate.dto";
import { CertificateEntity } from "./certificate.entity";

@Controller("/api/certificates")
export class CertificateController {
  constructor(public certificateService: CertificateService) {}

  @Get("/index")
  Index(): any {
    console.log('Submitted Data:');
    return this.certificateService.getIndex();
  }

  @Get('/all')
  getAllStudent(): any {
    return this.certificateService.getAllStudents();
  }

  @Get('find/:searchKey')
  async findStudent(@Param('searchKey') searchKey: string) {
    return this.certificateService.findStudent(searchKey);
  }

  @Post('/create/:studentUsername')
    @UseInterceptors(FileInterceptor('myfile',
    {storage:diskStorage({
      destination: './uploads',
      filename: function (req, file, cb) {
        cb(null,Date.now()+file.originalname)
      }
    })
    }))
    signup(@Body() mydto:CertificateDTO,@UploadedFile(new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
      ],
    }),) file: Express.Multer.File,
    @Param('studentUsername') studentUsername: string,
    ){
        mydto.fileName = file.filename;
        return this.certificateService.signup(mydto, studentUsername);
    }


    @Put('/validate/:3')
    async blockStudent(@Param('username') username: number): Promise<CertificateEntity> {
    return this.certificateService.blockStudentByUsername(username);
    }



}
