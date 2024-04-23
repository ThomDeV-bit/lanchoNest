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
				orderId: payment
			}
		})
	}

	async updatePaymets(update: any) {
		const query = this.paymentsRepository.createQueryBuilder()
			.update()
			.set({
				status: update.transaction.status === 'APROVED' ? PaymentStatus.APROVED : PaymentStatus.REJECTED
			})
			.where(`orderId = ${update.transaction.idOrder} `)
		console.log(await query.execute())
		return await query.execute()
	}

	async validPayment(payment: paymentsDTO) {
		const payments = this.paymentsRepository.create(payment)
		return await this.paymentsRepository.save(payments)
	}
}