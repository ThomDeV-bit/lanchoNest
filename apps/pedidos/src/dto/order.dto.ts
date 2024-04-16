import { ClientEntity } from "../database/entities/client.entity"
import { OrderStatus } from "../enum/enum"

export class OrdersDTO {
	id: number
	name:string
	amount : number
	description :string
	createAt?: Date
	updatedAt?: Date
	clientId: ClientEntity
	status: OrderStatus

}