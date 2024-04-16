import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentsEntity } from "./entities/pagamentos.entity";


@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'mysql',
			port: 3310,
			username: 'root',
			password: 'root123',
			database: 'PAGAMENTOS',
			entities: [PaymentsEntity],
			migrations: []
		})]
})

export class DatabaseModule { }

