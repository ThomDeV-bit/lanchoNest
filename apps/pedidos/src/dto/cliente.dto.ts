import { Prisma } from '.prisma/client/PEDIDOS'

export class ClienteDTO implements Prisma.ClientesCreateInput {
	nome: string
	numero: string
	email: string
	pedidos?: Prisma.PedidosCreateNestedManyWithoutClienteInput
}

