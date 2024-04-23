import { NestFactory } from '@nestjs/core';
import { FinanceiraModule } from './financial.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(FinanceiraModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['broker:29092'],
      },
      consumer: {
        groupId: 'transaction-consumer'
      }
    }
  })
  await app.startAllMicroservices()
  await app.listen(3002);
}
bootstrap();
