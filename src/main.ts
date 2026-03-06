import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // ¡Esto es magia pura! Filtra y valida todo lo que entra a la API
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Quita campos que no estén en el DTO
      forbidNonWhitelisted: true, // Lanza error si envían campos extraños
      transform: true, // Transforma los datos a los tipos correctos
    }),
  );

  await app.listen(3000);
}
bootstrap();
