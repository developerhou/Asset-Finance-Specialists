import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';
import { randomBytes } from 'crypto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const secret = randomBytes(32).toString('hex');

  app.useGlobalPipes(new ValidationPipe());

  app.use(
    session({
      secret: secret,
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(process.env.PORT || 80);
}
bootstrap();
