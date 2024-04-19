import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { PaymentStatus } from "../../enum/enum";

@Entity()

export class PaymentsEntity {
	@PrimaryGeneratedColumn({ name: 'id' })
	id: number

	@Column({ name: 'amount', type: 'int' })
	amount: number

	@Column({ name: 'clientId', type: 'int' })
	clientId: number

	@Column({ name: 'orderId', type: 'int' })
	orderId: number

	@Column({ name: 'status', type: 'enum', enum: PaymentStatus })
	status: PaymentStatus


	@CreateDateColumn({ name: 'createdAt', type: 'datetime' })
	createdAt: Timestamp
}