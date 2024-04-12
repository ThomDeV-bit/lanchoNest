import { PedidosEntities } from "../database/entities/pedidos.entity"

export class ClienteDTO {
	nome: string
	numero: string
	email: string
	pedidos: PedidosEntities[]
}

