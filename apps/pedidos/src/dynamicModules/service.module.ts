import { DynamicModule, Module } from "@nestjs/common";
import { PedidosService } from "../pedidos.service";

@Module({})
export class ServiceModule {
	static register(): DynamicModule {
		return {
			module: ServiceModule,
			global: true,
			providers: [PedidosService],
			exports: [PedidosService]
		}
	}
}