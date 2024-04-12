import { ClienteEntity } from "../database/entities/cliente.entity"
import { StatusPedido } from "../enum"
export class PedidosDTO {
	id: number
	nome: string
	preco: number
	descricao: string
	createAt?: Date
	updatedAt?: Date
	clienteId: ClienteEntity
	status: StatusPedido

}