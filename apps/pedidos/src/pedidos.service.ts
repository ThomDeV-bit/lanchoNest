import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class PedidosService {
  constructor(private readonly prismaService: PrismaService) {

  }
  async buscarPedidos() {
    return await this.prismaService.pedidos.findMany()
  }
}
