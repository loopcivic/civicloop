import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import cookieParser from 'cookie-parser';

import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express';


async function bootstrap() {
  // const app = await NestFactory.create(AppModule);

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('trust proxy', 1);

  // app.useStaticAssets(join(__dirname, '..', 'uploads'), {
  //   prefix: '/uploads/',
  // });
  app.useStaticAssets(join(process.cwd(), 'src', 'uploads'), {

    prefix: '/uploads/',
  });


  app.use(cookieParser());

  // ✅ ADD THIS LINE
  // This ensures NestJS listens for shutdown signals (like Ctrl+C)
  // and triggers the onModuleDestroy method in your PrismaService.
  app.enableShutdownHooks();


  // app.use(helmet());
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
      crossOriginOpenerPolicy: { policy: 'unsafe-none' },
    }),
  );

  // app.enableCors({
  //   origin: "http://localhost:3000",
  //   credentials: true,
  // });

  const allowedOrigins = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://10.149.72.136:3000',
    'https://civicloop.app',        // production
    'https://www.civicloop.app',    // production
    'https://civicloop-web.vercel.app',
    'http://civicloop.in',
    'http://www.civicloop.in',
    'https://staging.civicloop.app' // optional
    
  ];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow Postman, curl, mobile apps

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('CORS blocked: ' + origin), false);
    },
    credentials: true,
  });


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('CivicLoop API')
    .setDescription('Single-city pilot API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);


  const port = process.env.PORT ? Number(process.env.PORT) : 4000;
  await app.listen(port);

  // eslint-disable-next-line no-console
  console.log(`API running on http://localhost:${port}`);
  console.log(`Swagger on http://localhost:${port}/docs`);
}
bootstrap();
