import { DynamicModule, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { OrdersService } from "../services/pedidos.service";

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
						name: 'SERVIÇO_DE_PEDIDOS',
						transport: Transport.KAFKA,
						options: {
							client: {
								clientId: 'pedidos',
								brokers: ['kafka:29092'],
							},
						}
					},
				])
			]
		}
	}
}