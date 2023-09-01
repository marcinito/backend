import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [AuthService,PrismaService],
  controllers: [AuthController],
  imports:[JwtModule.register({}),ConfigModule.forRoot({isGlobal:true})]
})
export class AuthModule {}
