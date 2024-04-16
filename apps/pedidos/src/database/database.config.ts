import { DataSource, DataSourceOptions } from "typeorm";
import { PedidosEntities } from "./entities/pedidos.entity";
import { ClienteEntity } from "./entities/cliente.entity";
import { Migrations1712948440267 } from "./migrations/1712948440267-migrations";

export const database: DataSourceOptions = {
	type: 'mysql',
	host: 'mysql',
	port: 3306,
	username: 'root',
	password: 'root123',
	database: 'PEDIDOS',
	entities: [PedidosEntities, ClienteEntity],
	migrations :[Migrations1712948440267]
}

const databaseProvider = new DataSource(database)

export default databaseProvider;