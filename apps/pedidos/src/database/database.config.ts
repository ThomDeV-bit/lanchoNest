import { DataSource, DataSourceOptions } from "typeorm";
import { OrdersEntity } from "./entities/order.entity";
import { ClientEntity } from "./entities/client.entity";
import { Migrations1713786840544 } from "./1713786840544-migrations";
import { Migrations1713817154744 } from "./1713817154744-migrations";
import { Migrations1713818047414 } from "./1713818047414-migrations";


export const database: DataSourceOptions = {
	type: 'mysql',
	host: 'mysql',
	port: 3306,
	username: 'root',
	password: 'root123',
	database: 'PEDIDOS',
	entities: [OrdersEntity, ClientEntity],
	migrations: [Migrations1713786840544, Migrations1713817154744, Migrations1713818047414]
}

const databaseProvider = new DataSource(database)

export default databaseProvider;