import { StatusPedido } from "../enum"
import { Prisma } from '.prisma/client/PEDIDOS'
export class PedidosDTO implements Prisma.PedidosUncheckedCreateInput {
	nome: string
	preco: number
	descricao: string
	createAt: Date
	updatedAt: Date
	clienteId: number
	status: StatusPedido

}