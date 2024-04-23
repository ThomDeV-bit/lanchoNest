import { Module, DynamicModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { database } from "./database.config";
import { PaymentsEntity } from "./entities/pagamentos.entity";
import { PaymentsRepository } from "./reposiotry/payments.repository";



@Module({})
export class TypeormModule {
	static register(): DynamicModule {
		const entitiesSchema = [
			PaymentsEntity,
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
				PaymentsRepository,

			],
			providers: [
				PaymentsRepository
			]

		}
	}
}