import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { Transform } from 'class-transformer';
async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule,{cors:true});
  app.useGlobalPipes(new ValidationPipe({transform:true}));
  await app.listen(3000);
}
bootstrap();
