import { DataSource, DataSourceOptions } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { TransactionEntity } from "./entities/transaction.entity";
import { Migrations1713815904695 } from "./1713815904695-migrations";



export const database: DataSourceOptions = {
	type: 'mysql',
	host: 'mysql',
	port: 3306,
	username: 'root',
	password: 'root123',
	database: 'FINANCEIRA',
	entities: [TransactionEntity, UserEntity],
	migrations: [Migrations1713815904695]
}

const databaseProvider = new DataSource(database)

export default databaseProvider;