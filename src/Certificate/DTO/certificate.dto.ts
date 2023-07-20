import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CertificateDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  cgpa: number;

  @IsNotEmpty()
  @IsNumber()
  graduationYear: number;

  @IsNotEmpty()
  @IsNumber()
  enrollmentYear: number;

  @IsOptional()
  universityId: number;

  @IsNotEmpty()
  fileName: string;

  @IsNotEmpty()
  universityUsername: string;

  @IsOptional()
  studentId: number;

  @IsOptional()
  @IsBoolean()
  isVerified: boolean;
}
