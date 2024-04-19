import { Module, DynamicModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { database } from "./database.config";
import { UserEntity } from "./entities/user.entity";
import { UserRepository } from "./reposiotry/financial.repository";
import { TransactionEntity } from "./entities/transaction.entity";
import { TransactionRepository } from "./reposiotry/transaction.repository";



@Module({})
export class TypeormModule {
	static register(): DynamicModule {
		const entitiesSchema = [
			UserEntity,
			TransactionEntity
		];
		const config = database;
		return {
			module: TypeormModule,
			global: true,
			imports: [
				TypeOrmModule.forFeature(entitiesSchema),
				TypeOrmModule.forRootAsync({
					useFactory: async () => {
						return {
							autoLoadEntities: true,
							...config
						};
					}
				})
			],
			exports: [
				UserRepository,
				TransactionRepository

			],
			providers: [
				UserRepository,
				TransactionRepository
			]

		}
	}
}