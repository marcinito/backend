import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  nickName: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  passwordRepeat:string

  @IsNotEmpty()
  image:any
}