import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationEntity } from './application.entity';


@Controller('/application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post('/create/:studentUsername/:positionId')
  async createPost(
    @Param('studentUsername') studentUsername: string,
    @Param('positionId') positionId: number
  ){
    return this.applicationService.createPosition(studentUsername, positionId);
  }

  @Get('/getAll')
  async getAllApplications() {
    return this.applicationService.getAllApplications();
  }


  @Put('/accpect/:id')
  async blockStudent(@Param('id') username: number): Promise<ApplicationEntity> {
  return this.applicationService.blockStudentByUsername(username);
  }


}
