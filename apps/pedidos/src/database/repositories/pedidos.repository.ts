import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PedidosEntities } from "../entities/pedidos.entity";
import { Repository } from "typeorm";
import { PedidosDTO } from "../../dto/pedido.dto";

@Injectable()

export class PedidosRepository {
	constructor(
		@InjectRepository(PedidosEntities)
		private readonly pedidosRepository: Repository<PedidosEntities>
	) { }
	async listar() {
		return await this.pedidosRepository.find()
	}

	async criarPedido(pedido: PedidosDTO) {
		const pedidos = this.pedidosRepository.create(pedido)
		return await this.pedidosRepository.save(pedidos)
	}
}