import { DynamicModule, Module } from "@nestjs/common";
import { OPTIONS_TYPE } from "./options/api.module-options";
import { OrdersController } from "../controllers/order.controller";

@Module({})
export class ApiModule {
	static register(options: typeof OPTIONS_TYPE): DynamicModule {
		return {
			module: ApiModule,
			global: true,
			controllers: [OrdersController],
			imports: [options.serviceModule]

		}
	}
}