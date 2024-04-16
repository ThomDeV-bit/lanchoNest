import { PaymentStatus } from "../enum/enum"

export class paymentsDTO {
	amount: number
	clienteId: number
	pedidoId: number
	status: PaymentStatus
	createdAt: Date
}