import { DataSource, DataSourceOptions } from "typeorm";
import { PaymentsEntity } from "./entities/pagamentos.entity";
import { Migrations1713553283213 } from "./1713553283213-migrations";


export const database: DataSourceOptions = {
	type: 'mysql',
	host: 'mysql',
	port: 3306,
	username: 'root',
	password: 'root123',
	database: 'PAGAMENTOS',
	entities: [PaymentsEntity],
	migrations: [Migrations1713553283213]
}

const databaseProvider = new DataSource(database)

export default databaseProvider;