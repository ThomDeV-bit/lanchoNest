import { Controller, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller()
export class PagamentosController {
  constructor(private readonly paymentsService: PaymentsService) { }

  @Get()
  async getHello() {
    return this.paymentsService.list();
  }
}
