import { Injectable, Inject } from "@nestjs/common"
import { ClientKafka } from "@nestjs/microservices"
import { lastValueFrom } from "rxjs"
import { ClientDTO } from "../dto/client.dto"
import { OrdersDTO } from "../dto/order.dto"
import { OrdersRepository } from "../database/repositories/orders.repository"
import { OrdersEntity } from "../database/entities/order.entity"
import { Kafka } from "kafkajs"


@Injectable()
export class OrdersService {
  constructor(
    private readonly pedidosRepository: OrdersRepository,
    @Inject('ORDER_SERVICE')
    private readonly kafkaService: ClientKafka,
    @Inject('USER_SERVICE')
    private readonly kafkaUserService: ClientKafka
  ) {

  }
  async buscarPedidos() {
    const pedidos = await this.pedidosRepository.listar()
    return pedidos
  }

  async createOrder(order: OrdersDTO) {
    const orders = await this.pedidosRepository.criarPedido(order)
    await lastValueFrom(this.kafkaService.emit('order', {orders}))
    console.log(orders)
    return orders
  }
  async createClient(client: ClientDTO) {
    const user = await this.pedidosRepository.criarCliente(client)
    await lastValueFrom(this.kafkaUserService.emit('create_user', { client }))
    return user
  }

  async updateOrder(message: any) {
    return await this.pedidosRepository.update(message)
  }

}
