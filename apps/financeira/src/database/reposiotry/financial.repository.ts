import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { FinancialDTO } from "../../dto/financial.dto";

@Injectable()

export class UserRepository {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userEntity: Repository<UserEntity>) { }

	async list() {
		return await this.userEntity.find()
	}
	async listby(user: FinancialDTO) {
		return await this.userEntity.findOne({
			where: {
				email: user.email,
			}
		})
	}
	async create(finacial: FinancialDTO) {
		console.log(finacial)
		const financialRegister = this.userEntity.create(finacial)
		return await this.userEntity.save(financialRegister)
	}
}