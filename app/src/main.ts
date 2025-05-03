import { NestFactory } from '@nestjs/core';
import { NextFunction , Request , Response } from 'express';
import { AppModule } from './app.module';


function globalMiddlewareOne(req: Request, res: Response, next: NextFunction) {
  console.log('this is middleware global')
  next();
}

function globalMiddlewareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('this is middleware global')
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareOne);
  app.use(globalMiddlewareTwo);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
