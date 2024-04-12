import { NestFactory } from '@nestjs/core';
import { AppModule } from './dynamicModules/app.module';
import databaseProvider, { database } from './database/database.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.register());
  databaseProvider.initialize().then(() => console.log('conectado ao banco de dados'))
  await app.listen(3000);
}
bootstrap();
