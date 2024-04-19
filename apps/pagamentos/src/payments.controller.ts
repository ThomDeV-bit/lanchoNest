import { Controller, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentStatus } from './enum/enum';


@Controller()
export class PagamentosController {
  constructor(private readonly paymentsService: PaymentsService) { }

  @Get('pedidos')
  async getHello() {
    return this.paymentsService.list();
  }

  @EventPattern('pedidos')
  async payment(@Payload() message) {
    await this.paymentsService.validPayment({
      amount: message.pedidos.price,
      clientId: message.pedidos.clientId,
      orderId: message.pedidos.id,
      createdAt: new Date,
      status: PaymentStatus.APROVED
    })
  }
}
