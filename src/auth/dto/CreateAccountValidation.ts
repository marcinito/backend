import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  nickname: string;

  @IsEmail()
  @IsNotEmpty()
    email: string;

  @MinLength(3)
  password: string;
  @MinLength(3)
  repeatpassword: string;

  image:any
}