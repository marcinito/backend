import { Body, Controller, Get, Post, Render, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';
import { CreateAccountDto } from './dto/CreateAccountValidation';
import { Response } from 'express';
import { loginDto } from './dto/loginDto';


@Controller('auth')
export class AuthController {
    constructor(private prisma:PrismaService,private service:AuthService){}

    @Get('login')
  @Render('login')
  login(){
    return {yo:"Login"}
  }

  @Get("create-account")
  @Render('createAccount')
  createAcoount(){

  }
  @Post("register")
  async createAccount(@Body() body:CreateAccountDto,@Res() res:Response,){
    console.log(body,"what")
    return  this.service.createAccount(body,res)
  
  }

  @Post('login')
  loginToAccount(@Body() body:loginDto,@Res() res:Response){
return this.service.login(body,res)
  }
}
