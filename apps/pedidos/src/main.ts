import { NestFactory } from '@nestjs/core';
import { PedidosModule } from './pedidos.module';

async function bootstrap() {
  const app = await NestFactory.create(PedidosModule);
  await app.listen(3000);
}
bootstrap();
