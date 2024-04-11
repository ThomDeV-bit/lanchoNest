import { Body, Controller, Get, Post } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosDTO } from './dto/pedido.dto';
import { ClienteDTO } from './dto/cliente.dto';

@Controller('Pedido')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) { }

  @Get('')
  async getHello() {
    console.log('ooi')
    return await this.pedidosService.buscarPedidos();
  }

  @Get('')
  async listarCliente() {
    console.log('ooi')
    return await this.pedidosService.buscarPedidos();
  }

  @Post('criarCliente')
  async criarCliente(@Body() data: ClienteDTO) {
    return await this.pedidosService.criarCliente(data)
  }

  @Post('criar')
  async criar(@Body() data: PedidosDTO) {
    return await this.pedidosService.criarPedido(data)
  }
}
