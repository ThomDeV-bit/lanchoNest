import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PedidosDTO } from './dto/pedido.dto';
import { StatusPedido } from '.prisma/client/PEDIDOS'
import { ClientKafka } from '@nestjs/microservices';
import { ClienteDTO } from './dto/cliente.dto';

@Injectable()
export class PedidosService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject('SERVIÇO_DE_PEDIDOS')
    private readonly kafkaService: ClientKafka
  ) {

  }
  async buscarPedidos() {
    return await this.prismaService.pedidos.findMany()
  }
  async buscarCliente() {
    return await this.prismaService.clientes.findMany()
  }
  async criarCliente(data: ClienteDTO) {
    return await this.prismaService.clientes.create({
      data: {
        ...data
      }
    })
  }

  async criarPedido(data: PedidosDTO) {
    const user = await this.prismaService.clientes.findFirst({
      where: {
        id: data.clienteId
      }
    })
    if (!user) throw new Error('Usuario n existe')
    const pedido = await this.prismaService.pedidos.create({
      data: {
        ...data,
        nome: user.nome,
        status: StatusPedido.PENDENTE
      }
    })
    this.kafkaService.emit('pedidos', 'PASSOU AQUI')
    return pedido

  }
}
