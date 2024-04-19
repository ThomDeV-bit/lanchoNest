import { OrdersEntity } from "../database/entities/order.entity"

export class ClientDTO {
	name: string
	number: string
	email: string
	order: OrdersEntity[]
}

