import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { TransactionEntity } from "./transaction.entity";

@Entity()

export class UserEntity {
	@PrimaryGeneratedColumn({ name: 'id' })
	id: number

	@Column({ name: 'name', type: 'varchar' })
	name: string

	@Column({ name: 'email', type: 'varchar', unique: true })
	email: string

	@Column({ name: 'credit', type: 'int' })
	credit: number

	@CreateDateColumn({ name: 'createdAt', type: 'datetime' })
	createdAt: Timestamp

	@OneToMany(() => TransactionEntity, (transaction) => transaction.id)
	transaction: TransactionEntity[]
}