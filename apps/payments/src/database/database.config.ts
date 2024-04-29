import { DataSource, DataSourceOptions } from 'typeorm';
import { PaymentsEntity } from './entities/pagamentos.entity';
import { Migrations1713786859509 } from './1713786859509-migrations';

export const database: DataSourceOptions = {
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'payments',
    entities: [PaymentsEntity],
    migrations: [Migrations1713786859509],
    synchronize: true,
};

const databaseProvider = new DataSource(database);

export default databaseProvider;
