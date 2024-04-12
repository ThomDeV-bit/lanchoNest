import { DataSource, DataSourceOptions } from "typeorm";
import { PedidosEntities } from "./entities/pedidos.entity";
import { ClienteEntity } from "./entities/cliente.entity";

export const database: DataSourceOptions = {
	type: 'mysql',
	host: 'mysql',
	port: 3306,
	username: 'root',
	password: 'root123',
	database: 'PEDIDOS',
	entities: [PedidosEntities, ClienteEntity],
}

const databaseProvider = new DataSource(database)

export default databaseProvider;