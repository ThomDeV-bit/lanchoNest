import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { ClientEntity } from "./client.entity";
import { OrderStatus } from "../../enum/enum";

@Entity()

export class OrdersEntity {

	@PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
	id: number

	@Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
	name: string

	@Column({ name: 'preco', type: 'int', nullable: false })
	preco: number

	@Column({ name: 'description', type: 'varchar', nullable: false })
	description: string


	@CreateDateColumn({ name: 'createAt', type: 'datetime', nullable: false })
	createAt: Timestamp

	@CreateDateColumn({ name: 'updatedAt', type: 'datetime', nullable: false })
	updatedAt: Timestamp

	@Column({ name: 'status', type: 'enum', enum: OrderStatus })
	status: OrderStatus

	@ManyToOne(() => ClientEntity, (client) => client.orders)
	clientId: ClientEntity
}