import { PaymentStatus } from "../enum/enum"

export class paymentsDTO {
	amount: number
	email: string
	clientId: number
	orderId: number
	status: PaymentStatus
	createdAt: Date
}