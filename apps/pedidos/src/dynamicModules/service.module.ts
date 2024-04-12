import { DynamicModule, Module } from "@nestjs/common";
import { PedidosService } from "../pedidos.service";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({})
export class ServiceModule {
	static register(): DynamicModule {
		return {
			module: ServiceModule,
			global: true,
			providers: [PedidosService],
			exports: [PedidosService],
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