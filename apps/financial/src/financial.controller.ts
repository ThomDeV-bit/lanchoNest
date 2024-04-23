import { Controller, Get } from '@nestjs/common';
import { FinanceiraService } from './financial.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('financeira')
export class FinanceiraController {
  constructor(private readonly financeiraService: FinanceiraService) { }

  @Get('transacoes')
  async getHello() {
    return await this.financeiraService.getHello();
  }

  @MessagePattern('create_user')
  async create(@Payload() message) {
    await this.financeiraService.create({
      credit: 5000,
      email: message.client.email,
      name: message.client.name
    })
  }

  @MessagePattern('payments')
  async validPayment(@Payload() message) {
    console.log(message)
    await this.financeiraService.validPayment(message)
  }
}
