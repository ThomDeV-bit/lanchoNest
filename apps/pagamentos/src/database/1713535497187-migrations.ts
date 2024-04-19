import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1713535497187 implements MigrationInterface {
    name = 'Migrations1713535497187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`payments_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`amount\` int NOT NULL, \`clientId\` int NOT NULL, \`orderId\` int NOT NULL, \`status\` enum ('APROVED', 'REJECTED') NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`payments_entity\``);
    }

}
