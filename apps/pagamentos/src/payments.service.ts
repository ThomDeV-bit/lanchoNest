import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PaymentsRepository } from './database/reposiotry/payments.repository';
import { paymentsDTO } from './dto/payment.dto';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject(PaymentsRepository)
    private readonly paymentsRepository: PaymentsRepository,
    @Inject('PAYMENTS_SERVICE')
    private readonly kafkaService: ClientKafka,
    @Inject('PAYMENTS_VALIDATE_SERVICE')
    private readonly kafkaValidatePaymentService: ClientKafka

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
    const payments = await this.paymentsRepository.updatePaymets(validPayment)
    const paymentsUpdate = await this.paymentsRepository.listBy(validPayment.transaction.idOrder)
    await lastValueFrom(this.kafkaValidatePaymentService.emit('valid_payments', { paymentsUpdate }))
    return payments
  }
}