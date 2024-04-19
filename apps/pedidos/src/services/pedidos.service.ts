import { Injectable, Inject } from "@nestjs/common"
import { ClientKafka } from "@nestjs/microservices"
import { lastValueFrom } from "rxjs"
import { ClientDTO } from "../dto/client.dto"
import { OrdersDTO } from "../dto/order.dto"
import { OrdersRepository } from "../database/repositories/orders.repository"
import { OrdersEntity } from "../database/entities/pedidos.entity"
import { Kafka } from "kafkajs"


@Injectable()
export class OrdersService {
  constructor(
    private readonly pedidosRepository: OrdersRepository,
    @Inject('ORDER_SERVICE')
    private readonly kafkaService: ClientKafka
  ) {

  }
  async buscarPedidos() {
    const pedidos = await this.pedidosRepository.listar()
    console.log(await lastValueFrom(this.kafkaService.emit('pedidos', pedidos)))
    return pedidos
  }

  async createOrder(pedido: OrdersDTO) {
    const pedidos = await this.pedidosRepository.criarPedido(pedido)
    await lastValueFrom(this.kafkaService.emit('pedidos', { pedidos }))
    return pedidos
  }
  async createClient(cliente: ClientDTO) {
    return await this.pedidosRepository.criarCliente(cliente)
  }

}
