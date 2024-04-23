import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrdersEntity } from "../entities/order.entity";
import { Repository } from "typeorm";
import { OrdersDTO } from "../../dto/order.dto";
import { ClientDTO } from "../../dto/client.dto";
import { ClientEntity } from "../entities/client.entity";
import { OrderStatus } from "../../enum/enum";

@Injectable()

export class OrdersRepository {
	constructor(
		@InjectRepository(OrdersEntity)
		private readonly orderRepository: Repository<OrdersEntity>,
		@InjectRepository(ClientEntity)
		private readonly clientRepository: Repository<ClientEntity>
	) { }
	async listar() {
		try {
			return await this.clientRepository.find({
				relations: {
					orders: true
				}
			})
		} catch (error) {
			console.log(error)
		}

	}

	async criarPedido(pedido: OrdersDTO) {
		try {
			pedido.createAt = new Date()
			pedido.updatedAt = new Date()
			const cliente = await this.clientRepository.createQueryBuilder()
				.select()
				.where(`id = ${pedido.clientId}`)
				.getOne()
			if (!cliente) throw new NotFoundException('Cliente nao consta na base de dados')
			const pedidos = this.orderRepository.create({
				...pedido,
				name: cliente?.name,
				email: cliente?.email
			})
			return await this.orderRepository.save(pedidos)
		} catch (error) {
			console.log(error)
			throw new BadRequestException(error)
		}

	}

	async criarCliente(cliente: ClientDTO) {
		const criarCliente = this.clientRepository.create(cliente)
		return await this.clientRepository.save(criarCliente)
	}

	async update(message: any) {
		const query = await this.orderRepository.update(
			{
				id: message.paymentsUpdate.orderId
			},
			{
				status: message.paymentsUpdate.status === 'APROVED' ? OrderStatus.PAYED : OrderStatus.CANCELLED
			}
		)

		return query
	}
}