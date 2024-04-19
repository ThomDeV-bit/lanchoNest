import { DataSource, DataSourceOptions } from "typeorm";
import { OrdersEntity } from "./entities/pedidos.entity";
import { ClientEntity } from "./entities/client.entity";
import { Migrations1713372925277 } from "./migrations/1713372925277-migrations";

export const database: DataSourceOptions = {
	type: 'mysql',
	host: 'mysql',
	port: 3306,
	username: 'root',
	password: 'root123',
	database: 'PEDIDOS',
	entities: [OrdersEntity, ClientEntity],
	migrations: [Migrations1713372925277]
}

const databaseProvider = new DataSource(database)

export default databaseProvider;