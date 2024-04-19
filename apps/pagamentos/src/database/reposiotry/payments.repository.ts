import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PaymentsEntity } from "../entities/pagamentos.entity";
import { Repository } from "typeorm";
import { paymentsDTO } from "../../dto/payment.dto";
import { PaymentStatus } from "../../enum/enum";

@Injectable()

export class PaymentsRepository {
	constructor(
		@InjectRepository(PaymentsEntity)
		private readonly paymentsRepository: Repository<PaymentsEntity>) { }

	async list() {
		return await this.paymentsRepository.find()
	}

	async listBy(payment: number) {
		return await this.paymentsRepository.findOne({
			where: {
				id: payment
			}
		})
	}

	async updatePaymets(orderId: number, status: PaymentStatus) {
		const query = this.paymentsRepository.createQueryBuilder()
		query.update().set({ status: status })
		query.where(`orderId = ${orderId}`)
		return await query.execute()
	}

	async validPayment(payment: paymentsDTO) {
		console.log(payment)
		const payments = this.paymentsRepository.create(payment)
		return await this.paymentsRepository.save(payments)
	}
}