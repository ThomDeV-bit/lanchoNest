import { Inject, Injectable } from '@nestjs/common';
import { PaymentsRepository } from './database/reposiotry/payments.repository';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject(PaymentsRepository)
    private readonly paymentsRepository: PaymentsRepository
  ) { }
  async list() {
    return await this.paymentsRepository.list();
  }
}