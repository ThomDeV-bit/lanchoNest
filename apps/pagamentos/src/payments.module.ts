import { Module } from '@nestjs/common';
import { PagamentosController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { DatabaseModule } from './database/database.config';

@Module({
  imports: [DatabaseModule],
  controllers: [PagamentosController],
  providers: [PaymentsService],
})
export class PagamentosModule { }
