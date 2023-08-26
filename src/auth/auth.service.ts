import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccountDto } from './dto/CreateAccountValidation';
import { Response } from 'express';

@Injectable()
export class AuthService {
    constructor(private prisma:PrismaService){}

   async createAccount(@Body() body:CreateAccountDto,res:Response){
    console.log(body,"body")
const user=await this.prisma.user.create({
    data:{
        nickName:body.nickname,
        email:body.email,
        password:body.password,
        image:body.image
    }
})
return user

    }
}
