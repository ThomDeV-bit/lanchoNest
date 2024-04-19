import { PaymentStatus } from "../enum/enum"

export class paymentsDTO {
	amount: number
	clientId: number
	orderId: number
	status: PaymentStatus
	createdAt: Date
}