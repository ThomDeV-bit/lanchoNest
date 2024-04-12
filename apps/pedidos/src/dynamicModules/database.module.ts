import { Module, DynamicModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { database } from "../database/database.config";
import { ClienteEntity } from "../database/entities/cliente.entity";
import { PedidosEntities } from "../database/entities/pedidos.entity";
import { PedidosRepository } from "../database/repositories/pedidos.repository";

@Module({})
export class TypeormModule {
	static register(): DynamicModule {
		const entitiesSchema = [
			PedidosEntities,
			ClienteEntity

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
				PedidosRepository,

			],
			providers: [
				PedidosRepository
			]

		}
	}
}