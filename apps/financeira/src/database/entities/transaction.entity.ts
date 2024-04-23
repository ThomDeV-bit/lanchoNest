import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { TransactionStatus } from "../../enum/enum";

@Entity()

export class TransactionEntity {
	@PrimaryGeneratedColumn({ name: 'id' })
	id: number

	@Column({ name: 'idOrder', type: 'int' })
	idOrder: number

	@Column({ name: 'amount', type: 'int' })
	amount: number

	@Column({ name: 'status', type: 'enum', enum: TransactionStatus })
	status: TransactionStatus

	@ManyToOne(() => UserEntity, (financial) => financial.id, {
		cascade: ['update']
	})
	userId: UserEntity
}