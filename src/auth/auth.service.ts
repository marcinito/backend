import { Body, Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccountDto } from './dto/CreateAccountValidation';
import { Response } from 'express';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { loginDto } from './dto/loginDto';
import { ConfigService } from '@nestjs/config';
import { JwtModule,JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private prisma:PrismaService,private config:ConfigService,
        private jwt:JwtService){}

   async createAccount(body:CreateAccountDto,res:Response){

    const user= await this.prisma.user.create({
        data:{
            nickName:body.nickName,
            email:body.email,
            password:body.password,
            image:body.image

        }
    })
if(!user){
    return {a:"podaj dobre dane"}
}
return res.redirect("/")
    }
    
async login(body:loginDto,res:Response){
const user=await this.prisma.user.findFirst({
    where:{email:body.email}
})
if(!user){
    throw new UnauthorizedException("błędne dane logowania")
}

const token=await this.createTokenJwt(user.id,user.email)
res.cookie("jwt",token,{httpOnly:true})
res.redirect('/')
return user
}

async createTokenJwt(userId:number,email:string){

    const payload={
        sub:userId,
        email:email
    }
    const secret=this.config.get("JWT_SECRET")

    const token=await this.jwt.signAsync(payload,{
        expiresIn:'10min',
        secret:secret
    })
    return token

}

}
