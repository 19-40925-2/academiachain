import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable logging and set logging level to 'verbose'
  app.useLogger(new Logger('verbose'));
  app.enableCors();
  
  await app.listen(3000);
}
bootstrap();
