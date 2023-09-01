import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';

import { JwtModule,JwtService } from '@nestjs/jwt';
import { PrismaService } from './prisma/prisma.service';
@Injectable()
export class AppService {
  constructor(private jwt:JwtService,private prisma:PrismaService){}
  async getHello(req:any) {
     console.log(req.cookies,'?')
     const token=req.cookies.jwt

     const decodedToken:any=this.jwt.decode(token)
     
     const currentTimeStamp=Math.floor(new Date().getTime()/1000)
     let expiresTime=currentTimeStamp-decodedToken['exp']
     if(expiresTime<0){
      const user=await this.prisma.user.findFirst({
         where:{
           email:decodedToken.email
         }
       })
       return user
      }
      else{
       return false
      }
  }
}
