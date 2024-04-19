import { DynamicModule, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { OrdersService } from "../services/order.service";

@Module({})
export class ServiceModule {
	static register(): DynamicModule {
		return {
			module: ServiceModule,
			global: true,
			providers: [OrdersService],
			exports: [OrdersService],
			imports: [
				ClientsModule.register([
					{
						name: 'ORDER_SERVICE',
						transport: Transport.KAFKA,
						options: {
							client: {
								clientId: 'order',
								brokers: ['broker:29092'],
							},
						}
					},
					{
						name: 'USER_SERVICE',
						transport: Transport.KAFKA,
						options: {
							client: {
								clientId: 'create_user',
								brokers: ['broker:29092'],
							},
						}
					},
				])
			]
		}
	}
}