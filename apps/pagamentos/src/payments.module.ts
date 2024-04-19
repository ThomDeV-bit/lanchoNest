import { Module } from '@nestjs/common';
import { PagamentosController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { TypeormModule } from './database/database.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [TypeormModule.register(),
  ClientsModule.register([
    {
      name: 'PAYMENTS_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'payments',
          brokers: ['broker:29092'],
        },
      }
    },
  ])
  ],
  controllers: [PagamentosController],
  providers: [PaymentsService],
})
export class PagamentosModule { }
