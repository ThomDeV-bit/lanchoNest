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
    try {
      const validUser: FinancialDTO = {
        email: message.payments.email,
      }
      const user = await this.userRepository.listby(validUser)
      if (!user) return new BadRequestException('Usuario n consta na base de dados financeiros')
      user.credit -= message.payments.amount
      const transactionParams: TransactionDTO = {
        idOrder: message.payments.id,
        amount: message.payments.amount,
        status: user.credit > message.payments.amount ? TransactionStatus.APROVED : TransactionStatus.REJECTED,
        userId: user,
      }
      const transaction = await this.transactionRepository.create(transactionParams)
      await lastValueFrom(this.kafkaService.emit('transaction', { transaction }))
      return transaction
    } catch (error) {
      throw new BadRequestException(error)
    }

  }
}


