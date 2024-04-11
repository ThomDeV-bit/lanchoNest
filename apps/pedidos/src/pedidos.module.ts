import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [PrismaModule,
    ClientsModule.register([
      {
        name: 'SERVIÇO_DE_PEDIDOS',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'pedidos',
            brokers: ['kafka:29092'],
          },
        }
      },
    ]),
  ],
  controllers: [PedidosController],
  providers: [PedidosService, PrismaService],
})
export class PedidosModule { }
