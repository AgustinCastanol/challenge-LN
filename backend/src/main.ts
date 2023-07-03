import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthKeyFilter } from './errors/errors.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AuthKeyFilter());
  await app.listen(3001);
}
bootstrap();
