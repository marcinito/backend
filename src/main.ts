import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import {v2 as cloudinary} from 'cloudinary';
import { PrismaClient } from '@prisma/client/edge'
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  const validationPipe = new ValidationPipe();
  app.useGlobalPipes(validationPipe);

  
          
cloudinary.config({ 
  cloud_name: 'dwinui6up', 
  api_key: '566514497645627', 
  api_secret: '***************************' 
});
   app.setBaseViewsDir(join(__dirname, '..', 'public'));
  app.setViewEngine('ejs');


  await app.listen(3000);
}
bootstrap();
