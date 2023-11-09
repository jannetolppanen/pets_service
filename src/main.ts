import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const swaggerInfo = {
  api_path: `/docs`,
  title: `Pets service api`,
  description: `Service api for simple pets`,
  version: `0.9`,
  tag: ``,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // class-validator pipe, joka tarkistaa että kaikki bodyssa olevat arvot ovat oikean tyyppisiä
  app.useGlobalPipes(new ValidationPipe());

  // openapi konfiguraatio, luo sen hauskan sivun missä näkyy kaikki endpointit
  const config = new DocumentBuilder()
    .setTitle(swaggerInfo.title)
    .setDescription(swaggerInfo.description)
    .setVersion(swaggerInfo.version)
    .addTag(swaggerInfo.tag)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerInfo.api_path, app, document);

  await app.listen(3000);
}
bootstrap();
