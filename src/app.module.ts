import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

import { JwtModule } from '@nestjs/jwt';

import { ConfigModule } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
    renderPath:'C:/Users/Marcin/Desktop/English/ang/public/home.ejs'
  }), CloudinaryModule,ConfigModule.forRoot({isGlobal:true}), AuthModule,JwtModule.register({}),


],
  controllers: [AppController],
  providers: [AppService,PrismaClient,PrismaService],

})
export class AppModule {}
