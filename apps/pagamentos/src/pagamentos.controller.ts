import { Controller, Get } from '@nestjs/common';
import { PagamentosService } from './pagamentos.service';

@Controller()
export class PagamentosController {
  constructor(private readonly pagamentosService: PagamentosService) {}

  @Get()
  getHello(): string {
    return this.pagamentosService.getHello();
  }
}
