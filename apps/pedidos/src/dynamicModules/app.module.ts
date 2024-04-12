import { DynamicModule, Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApiModule } from './api.module';
import { TypeormModule } from './database.module';
import { ServiceModule } from './service.module';
@Module({})

export class AppModule {
	static register(): DynamicModule {
		return {
			module: AppModule,
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
				]),
				TypeormModule.register(),
				ApiModule.register({ serviceModule: ServiceModule.register() })
			]
		}
	}
}


