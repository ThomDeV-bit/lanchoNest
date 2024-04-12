import { Body, Controller, Get, Post } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { ClienteDTO } from './dto/cliente.dto';
import { PedidosDTO } from './dto/pedido.dto';


@Controller('Pedido')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) { }

  @Get('')
  async getHello() {
    console.log('ooi')
    return await this.pedidosService.buscarPedidos();
  }


  @Post('Cliente')
  async criarCliente(@Body() data: ClienteDTO) {
    return await this.pedidosService.criarCliente(data)
  }

  @Post('criarPedido')
  async criar(@Body() data: PedidosDTO) {
    return await this.pedidosService.criarPedido(data)
  }
}
