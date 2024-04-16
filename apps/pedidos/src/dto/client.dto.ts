import { OrdersEntity } from "../database/entities/pedidos.entity"

export class ClientDTO {
	name: string
	number: string
	email: string
	order: OrdersEntity[]
}

