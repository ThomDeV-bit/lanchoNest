import { Module, DynamicModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { database } from "../database/database.config";
import { OrdersEntity } from "../database/entities/pedidos.entity";
import { ClientEntity } from "../database/entities/client.entity";
import { OrdersRepository } from "../database/repositories/orders.repository";


@Module({})
export class TypeormModule {
	static register(): DynamicModule {
		const entitiesSchema = [
			OrdersEntity,
			ClientEntity

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
				OrdersRepository,

			],
			providers: [
				OrdersRepository
			]

		}
	}
}