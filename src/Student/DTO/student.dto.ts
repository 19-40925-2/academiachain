import { IsAlpha, IsBoolean, IsDate, IsDateString, IsDecimal, IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MaxDate, MaxLength, MinLength } from "class-validator";

export class StudentDTO {

  @IsAlpha()
  @IsString({ message: "Please enter your First name" })
  @MaxLength(15, { message: "Maximum length of the first name can't exceed 15 characters" })
  @IsNotEmpty({ message: "First name can't be empty" })
  Firstname: string;

  @IsAlpha()
  @IsString({ message: "Please enter your Last name" })
  @MaxLength(15, { message: "Maximum length of the first name can't exceed 15 characters" })
  @IsNotEmpty({ message: "Last name can't be empty" })
  Lastname: string;

  @IsNotEmpty({ message: "Date of birth can't be empty" })
  @IsDateString()
  DOB: Date;

  @IsEmail()
  @Matches("^[^@\s]+@[^@\s]+\.(com|net|org|gov|edu)$")
  Email: string;

  @MaxLength(15, { message: "Maximum length of the Mobile number can't exceed 15 characters" })
  @MinLength(11, { message: "Minimum length of the Mobile number can't exceed 3 characters" })
  @IsMobilePhone("bn-BD")
  Phone: string;

  @IsString({ message: "Please enter your Username" })
  @MaxLength(15, { message: "Maximum length of the Username can't exceed 15 characters" })
  @MinLength(5, { message: "Minimum length of the Username can't exceed 5 characters" })
  @IsNotEmpty({ message: "Username can't be empty" })
  Username: string;

  @IsNotEmpty({ message: "Password can't be empty" })
  @MaxLength(25, { message: "Maximum length of the Password can't exceed 25 characters" })
  @MinLength(8, { message: "Minimum length of the Password can't exceed 8 characters" })
  Password: string;

  @IsOptional()
  @IsBoolean({ message: "Enter a boolean value: true or false" })
  Blocked: boolean;

  @IsNotEmpty({ message: "Please provide a filename" })
  filename: string;

  // Additional fields
  @IsString({ message: "Please enter information about yourself" })
  @MaxLength(255, { message: "Maximum length of the About Me field can't exceed 255 characters" })
  AboutMe: string;

  @IsString({ message: "Please enter your address" })
  @MaxLength(255, { message: "Maximum length of the address field can't exceed 255 characters" })
  Address: string;

  @IsString({ message: "Please enter your country" })
  @MaxLength(50, { message: "Maximum length of the country field can't exceed 50 characters" })
  Country: string;

  @IsString({ message: "Please enter your university" })
  @MaxLength(100, { message: "Maximum length of the university field can't exceed 100 characters" })
  University: string;

  @IsOptional()
  CV: string;

  createdAt: Date;
  updatedAt: Date;
}
