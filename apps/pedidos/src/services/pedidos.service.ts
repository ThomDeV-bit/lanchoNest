import { Injectable, Inject } from "@nestjs/common"
import { ClientKafka } from "@nestjs/microservices"
import { lastValueFrom } from "rxjs"
import { ClientDTO } from "../dto/client.dto"
import { OrdersDTO } from "../dto/order.dto"
import { OrdersRepository } from "../database/repositories/orders.repository"


@Injectable()
export class OrdersService {
  constructor(
    private readonly pedidosRepository: OrdersRepository,
    @Inject('SERVIÇO_DE_PEDIDOS')
    private readonly kafkaService: ClientKafka
  ) {

  }
  async buscarPedidos() {
    const pedidos = await this.pedidosRepository.listar()
    await lastValueFrom(this.kafkaService.emit('pedidos', pedidos))
    return pedidos
  }

  async createOrder(pedido: OrdersDTO) {
    return await this.pedidosRepository.criarPedido(pedido)
  }
  async createClient(cliente: ClientDTO) {
    return await this.pedidosRepository.criarCliente(cliente)
  }


}
