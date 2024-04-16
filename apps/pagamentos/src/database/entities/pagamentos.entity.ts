import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { PaymentStatus } from "../../enum/enum";

@Entity()

export class PaymentsEntity {
	@PrimaryGeneratedColumn({ name: 'id' })
	id: number

	@Column({ name: 'amount', type: 'int' })
	amount: number

	@Column({ name: 'clientId', type: 'int' })
	clienteId: number

	@Column({ name: 'orderId', type: 'int' })
	pedidoId: number

	@Column({ name: 'status', type: 'enum', enum: PaymentStatus })

	@CreateDateColumn({ name: 'createdAt', type: 'datetime' })
	createdAt: Timestamp
}