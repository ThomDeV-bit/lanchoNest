import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
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

	@ManyToMany(() => UserEntity, (financial) => financial.id)
	userId: UserEntity
}