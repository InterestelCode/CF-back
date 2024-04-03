import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //swagger
  const config = new DocumentBuilder()
    .setTitle('ControlFlow Backend')
    .setDescription('Api of the controlFlow application')
    .setVersion('1.0')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //USAR SESIONES
  app.use(
    session({
      secret: 'controlflowPruebaSecret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 99999999,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  //permitir Cors
  app.enableCors();
  await app.listen(4322);
}
bootstrap();
