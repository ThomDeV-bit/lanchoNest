import { Inject, Injectable } from '@nestjs/common';
import { PedidosDTO } from './dto/pedido.dto';
import { ClientKafka } from '@nestjs/microservices';
import { ClienteDTO } from './dto/cliente.dto';
import { PedidosRepository } from './database/repositories/pedidos.repository';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PedidosService {
  constructor(
    private readonly pedidosRepository: PedidosRepository,
    @Inject('SERVIÇO_DE_PEDIDOS')
    private readonly kafkaService: ClientKafka
  ) {

  }
  async buscarPedidos() {
    const pedidos = await this.pedidosRepository.listar()
    await lastValueFrom(this.kafkaService.emit('pedidos', pedidos))
    return pedidos
  }

  async criarPedido(pedido: PedidosDTO) {
    return await this.pedidosRepository.criarPedido(pedido)
  }
  async criarCliente(cliente: ClienteDTO) {
    return await this.pedidosRepository.criarCliente(cliente)
  }


}
