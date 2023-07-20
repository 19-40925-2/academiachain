import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDecimal } from 'class-validator';

export class PositionDto {

  
  title: string;

  
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  requirements: string;

  
  @IsString()
  department: string;

  
  @IsString()
  location: string;

  
  @IsDecimal({ decimal_digits: '2' })
  salary: number;

  
  professorId: number;
}
