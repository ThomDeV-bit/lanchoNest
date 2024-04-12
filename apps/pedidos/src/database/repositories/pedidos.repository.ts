import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PedidosEntities } from "../entities/pedidos.entity";
import { Repository } from "typeorm";
import { PedidosDTO } from "../../dto/pedido.dto";
import { ClienteEntity } from "../entities/cliente.entity";
import { ClienteDTO } from "../../dto/cliente.dto";
import { NotFoundError } from "rxjs";

@Injectable()

export class PedidosRepository {
	constructor(
		@InjectRepository(PedidosEntities)
		private readonly pedidosRepository: Repository<PedidosEntities>,
		@InjectRepository(ClienteEntity)
		private readonly ClienteRepository: Repository<ClienteEntity>
	) { }
	async listar() {
		return await this.pedidosRepository.find()
	}

	async criarPedido(pedido: PedidosDTO) {
		pedido.createAt = new Date()
		pedido.updatedAt = new Date()
		const cliente = await this.ClienteRepository.findOne({
			where: {
				id: pedido.clienteId.id
			}
		})
		if (!cliente) throw new NotFoundException('Cliente nao consta na base de dados')
		const pedidos = this.pedidosRepository.create({
			...pedido,

			nome: cliente.nome
		})
		return await this.pedidosRepository.save(pedidos)
	}

	async criarCliente(cliente: ClienteDTO) {
		const criarCliente = this.ClienteRepository.create(cliente)
		return await this.ClienteRepository.save(criarCliente)
	}
}