import { NestFactory } from '@nestjs/core';
import databaseProvider, { database } from './database/database.config';
import { AppModule } from './modules/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.register());
  databaseProvider.initialize().then(() => console.log('conectado ao banco de dados'))
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['broker:29092'],
      },
      consumer: {
        groupId: 'orders-consumer'
      }
    }
  })
  await app.listen(3000);
}
bootstrap();
