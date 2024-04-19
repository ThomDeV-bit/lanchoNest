import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TransactionEntity } from "../entities/transaction.entity";
import { TransactionDTO } from "../../dto/transaction.dto";

@Injectable()

export class TransactionRepository {
	constructor(
		@InjectRepository(TransactionEntity)
		private readonly transactionRepository: Repository<TransactionEntity>) { }

	async list() {
		return await this.transactionRepository.find()
	}
	async create(finacial: TransactionDTO) {
		const financialRegister = this.transactionRepository.create(finacial)
		return await this.transactionRepository.save(financialRegister)
	}
}