import { Controller, Get, Render, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private sevice:AppService) {}

  @Get()
  @Render('home')
  async getHello(@Req() req:any) {
    console.log(req.host)
   
    let sombodyLoged=await this.sevice.getHello(req)
    
    if(sombodyLoged){
      return {yo:true,sombodyLoged}
    }
    else{
      return {yo:false}
    }
   
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
