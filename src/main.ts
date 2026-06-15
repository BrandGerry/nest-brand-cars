import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);
  // AGREGADO PARA ENGLOBAL TODOS LOS PIPES
  // EN ESTE CASO VALIDATIONPIPE
  app.useGlobalPipes(
    new ValidationPipe({
      //PARA QUE SI MANDAS MAS VALORES EN EL BODY SALGA ERROR
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        exposeUnsetFields: false,
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
main();
