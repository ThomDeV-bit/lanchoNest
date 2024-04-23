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

  @EventPattern('order')
  async payment(@Payload() message) {
    await this.paymentsService.validOrder({
      amount: message.orders.price,
      clientId: message.orders.clientId,
      orderId: message.orders.id,
      createdAt: new Date,
      status: PaymentStatus.PENDING,
      email: message.orders.email
    })
  }

  @MessagePattern('transaction')
  async validPayment(@Payload() message) {
    await this.paymentsService.validPayments(message)
  }
}
