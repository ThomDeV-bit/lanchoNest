import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientDTO } from '../dto/client.dto';
import { OrdersService } from '../services/order.service';
import { OrdersDTO } from '../dto/order.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';


@Controller('Pedido')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) { }

  @Get('listar')
  async getHello() {
    try {
      return await this.orderService.buscarPedidos();
    } catch (error) {
      console.log(console.error(error))
    }
  }


  @Post('Cliente')
  async createClient(@Body() data: ClientDTO) {
    return await this.orderService.createClient(data)
  }

  @Post('criar')
  async createOrder(@Body() data: OrdersDTO) {
    return await this.orderService.createOrder(data)
  }

  @MessagePattern('payments')
  async updateOrderStatus(@Payload() message) {
    await this.orderService.updateOrder(message)
  }

}
