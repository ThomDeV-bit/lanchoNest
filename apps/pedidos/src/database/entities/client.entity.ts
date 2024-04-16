import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrdersEntity } from "./pedidos.entity";

@Entity()
export class ClientEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ name: 'name', type: 'varchar', nullable: false })
	name: string

	@Column({ name: 'number', type: 'varchar', nullable: false, unique: true })
	number: string


	@Column({ name: 'email', type: 'varchar', nullable: false, unique: true })
	email: string

	@OneToMany(() => OrdersEntity, (orders) => orders.clientId)
	orders: OrdersEntity[]

}