import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionDto } from './DTO/position.dto';
import { PositionEntity } from './position.entity';


@Controller('/position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post('/create/:professorusername')
  async createPost(
    @Param('professorusername') professorUsername: string,
    @Body() positionDto: PositionDto,
  ){
    positionDto.title = 'MS.c/Ph.D. Position';
    positionDto.department = 'Data Science';
    positionDto.description = 'Join our dynamic research team as an MS.c or Ph.D. student in the field of Data Science. You will have the opportunity to work on diverse and challenging projects related to big data analytics, statistical modeling, and predictive analytics.';
    positionDto.location = 'Daka, Bangladesh';
    positionDto.salary = 40000;
    positionDto.requirements = "Bachelor's or Master's degree in Computer Science, Statistics, or a related field. Strong programming skills in Python and experience with data analysis and machine learning techniques are desired.";
    return this.positionService.createPosition(professorUsername, positionDto);
  }

  @Get('/all')
  getAllStudent(): any {
    return this.positionService.getAllStudents();
  }

  @Get("/search/:id")
    searchById(@Param('id', ParseIntPipe) id:number){
        return this.positionService.searchById(id);
    }

}
