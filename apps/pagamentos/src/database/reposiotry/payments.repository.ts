import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PaymentsEntity } from "../entities/pagamentos.entity";
import { Repository } from "typeorm";
import { paymentsDTO } from "../../dto/payment.dto";

@Injectable()

export class PaymentsRepository {
	constructor(
		@InjectRepository(PaymentsEntity)
		private readonly paymentsRepository: Repository<PaymentsEntity>) { }

	async list() {
		return await this.paymentsRepository.find()
	}

	async validPayment(payment: paymentsDTO) {
		console.log(payment)
		const payments = this.paymentsRepository.create(payment)
		return await this.paymentsRepository.save(payments)
	}
}