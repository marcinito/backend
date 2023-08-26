import { Body, Controller, Get, Post, Render, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';
import { CreateAccountDto } from './dto/CreateAccountValidation';
import { Response } from 'express';

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

  createAccount(@Body() body:CreateAccountDto,@Res() res:Response){

    return this.service.createAccount(body,res)
  
  }
}
