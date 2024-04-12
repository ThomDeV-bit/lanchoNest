import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { StatusPedido } from "../../enum";
import { ClienteEntity } from "./cliente.entity";

@Entity()

export class PedidosEntities {

	@PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
	id: number

	@Column({ name: 'nome', type: 'varchar', length: 100, nullable: false })
	nome: string

	@Column({ name: 'preco', type: 'int', nullable: false })
	preco: number

	@Column({ name: 'descricao', type: 'varchar', nullable: false })
	descricao: string


	@CreateDateColumn({ name: 'createAt', type: 'datetime', nullable: false })
	createAt: Timestamp

	@CreateDateColumn({ name: 'updatedAt', type: 'datetime', nullable: false })
	updatedAt: Timestamp

	@Column({ name: 'status', type: 'enum', enum: StatusPedido })
	status: StatusPedido

	@ManyToOne(() => ClienteEntity, (user) => user.pedidos)
	clienteId: ClienteEntity
}