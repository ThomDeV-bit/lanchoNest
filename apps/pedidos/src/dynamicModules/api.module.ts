import { DynamicModule, Module } from "@nestjs/common";
import { PedidosController } from "../pedidos.controller";
import { OPTIONS_TYPE } from "./options/api.module-options";

@Module({})
export class ApiModule {
	static register(options: typeof OPTIONS_TYPE): DynamicModule {
		return {
			module: ApiModule,
			global: true,
			controllers: [PedidosController],
			imports: [options.serviceModule]

		}
	}
}