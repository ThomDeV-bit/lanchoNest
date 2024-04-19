import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { ClientHttp2Stream } from 'http2';
import { FinancialDTO } from './dto/financial.dto';
import { UserRepository } from './database/reposiotry/financial.repository';
import { TransactionDTO } from './dto/transaction.dto';
import { TransactionRepository } from './database/reposiotry/transaction.repository';
import { TransactionStatus } from './enum/enum';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class FinanceiraService {
  constructor(
    @Inject('FINANCIAL_SERVICE')
    private readonly kafkaService: ClientKafka,
    private readonly userRepository: UserRepository,
    private readonly transactionRepository: TransactionRepository
  ) { }
  async getHello() {
    return await this.userRepository.list();
  }


  async create(financial: FinancialDTO) {
    await this.userRepository.create(financial)
  }

  async validPayment(message: any) {
    const validUser: FinancialDTO = {
      email: message.email,
      name: message.name
    }
    const user = await this.userRepository.listby(validUser)
    if (!user) throw new BadRequestException('Usuario n consta na base de dados financeiros')
    const transaction: TransactionDTO = {
      idOrder: message.id,
      amount: message.price,
      status: user.credit < message.order.price ? TransactionStatus.APROVED : TransactionStatus.REJECTED,
      userId: user
    }
    const transactionFinish = await this.transactionRepository.create(transaction)
    await lastValueFrom(this.kafkaService.emit('transaction', { transactionFinish }))
    return transactionFinish
  }
}


