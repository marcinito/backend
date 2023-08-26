import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AuthService,PrismaService],
  controllers: [AuthController]
})
export class AuthModule {}
