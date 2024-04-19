import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PaymentsRepository } from './database/reposiotry/payments.repository';
import { paymentsDTO } from './dto/payment.dto';
import { ClientKafka } from '@nestjs/microservices';

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

  async validPayment(payment: paymentsDTO) {
    try {
      return await this.paymentsRepository.validPayment(payment)
    } catch (error) {
      console.log(error)
      throw new BadRequestException(error)
    }
  }
}