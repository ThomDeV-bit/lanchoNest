import { NestFactory } from '@nestjs/core';
import { PagamentosModule } from './payments.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(PagamentosModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['broker:29092'],
      },
      consumer: {
        groupId: 'payments-consumer'
      }
    }
  })
  await app.startAllMicroservices()
  await app.listen(3001);
}
bootstrap();
