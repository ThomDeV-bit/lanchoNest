import { Controller, Get } from '@nestjs/common';
import { PedidosService } from './pedidos.service';

@Controller('Pedido')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) { }

  @Get('')
  async getHello() {
    console.log('ooi')
    return await this.pedidosService.buscarPedidos();
  }
}
