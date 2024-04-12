import { NestFactory } from '@nestjs/core';
import { PagamentosModule } from './pagamentos.module';

async function bootstrap() {
  const app = await NestFactory.create(PagamentosModule);
  await app.listen(3000);
}
bootstrap();
