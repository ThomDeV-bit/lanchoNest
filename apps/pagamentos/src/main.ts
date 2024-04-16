import { NestFactory } from '@nestjs/core';
import { PagamentosModule } from './payments.module';

async function bootstrap() {
  const app = await NestFactory.create(PagamentosModule);
  await app.listen(3000);
}
bootstrap();
