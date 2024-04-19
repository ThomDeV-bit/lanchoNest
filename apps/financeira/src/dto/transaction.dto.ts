import { UserEntity } from "../database/entities/user.entity"
import { TransactionStatus } from "../enum/enum"

export class TransactionDTO {
	idOrder: number
	amount: number
	status: TransactionStatus
	userId: UserEntity

}