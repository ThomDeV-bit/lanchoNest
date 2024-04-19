import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PaymentsRepository } from './database/reposiotry/payments.repository';
import { paymentsDTO } from './dto/payment.dto';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { PaymentStatus } from './enum/enum';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject(PaymentsRepository)
    private readonly paymentsRepository: PaymentsRepository,
    @Inject('PAYMENTS_SERVICE')
    private readonly kafkaService: ClientKafka
  ) { }
  async list() {
    return await this.paymentsRepository.list();
  }

  async validOrder(payment: paymentsDTO) {
    try {
      const payments = await this.paymentsRepository.validPayment(payment)
      await lastValueFrom(this.kafkaService.emit('payments', { payments }))
      return payments
    } catch (error) {
      console.log(error)
      throw new BadRequestException(error)
    }
  }

  async validPayments(validPayment: any) {
    const status: PaymentStatus = validPayment.transaction.status == 'APROVED' ? PaymentStatus.APROVED : PaymentStatus.REJECTED
    const payment = await this.paymentsRepository.updatePaymets(
      validPayment.transaction.idOrder,
      status
    )
    await lastValueFrom(this.kafkaService.emit('payments', { payment }))
    return payment
  }
}