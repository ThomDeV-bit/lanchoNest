import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PedidosEntities } from "./pedidos.entity";

@Entity()
export class ClienteEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ name: 'nome', type: 'varchar', nullable: false })
	nome: string

	@Column({ name: 'numero', type: 'varchar', nullable: false, unique: true })
	numero: string


	@Column({ name: 'email', type: 'varchar', nullable: false, unique: true })
	email: string

	@OneToMany(()=> PedidosEntities, (pedido)=> pedido.clienteId)
	pedidos: PedidosEntities[]

}