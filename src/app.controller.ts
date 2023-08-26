import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('home')
  getHello() {
   
  }

  @Get('login')
  @Render('login')
  login(){
    return {yo:"Login"}
  }

  @Get("create-account")
  @Render('createAccount')
  createAccount(){
    
  }
}
