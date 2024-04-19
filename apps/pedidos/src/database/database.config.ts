import { DataSource, DataSourceOptions } from "typeorm";
import { OrdersEntity } from "./entities/order.entity";
import { ClientEntity } from "./entities/client.entity";
import { Migrations1713552806047 } from "./1713552806047-migrations";

export const database: DataSourceOptions = {
	type: 'mysql',
	host: 'mysql',
	port: 3306,
	username: 'root',
	password: 'root123',
	database: 'PEDIDOS',
	entities: [OrdersEntity, ClientEntity],
	migrations: [Migrations1713552806047]
}

const databaseProvider = new DataSource(database)

export default databaseProvider;