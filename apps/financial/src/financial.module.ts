import { Module } from '@nestjs/common';
import { FinanceiraController } from './financial.controller';
import { FinanceiraService } from './financial.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeormModule } from './database/database.module';

@Module({
  imports: [TypeormModule.register(), ClientsModule.register([
    {
      name: 'FINANCIAL_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'transaction',
          brokers: ['broker:29092'],
        },
      }
    },
  ])],
  controllers: [FinanceiraController],
  providers: [FinanceiraService],
})
export class FinanceiraModule { }
