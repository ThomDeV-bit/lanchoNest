import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1713786840544 implements MigrationInterface {
    name = 'Migrations1713786840544'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`client_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`number\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_a69453d1ebe24f51ed0105f57e\` (\`number\`), UNIQUE INDEX \`IDX_6293da38f0cd82179891e274d5\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`orders_entity\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`price\` int NOT NULL, \`email\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`status\` enum ('PENDING', 'PAYED', 'CANCELLED') NOT NULL, \`clientIdId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`orders_entity\` ADD CONSTRAINT \`FK_5fd4a799ba5983e06ee6ffb0555\` FOREIGN KEY (\`clientIdId\`) REFERENCES \`client_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orders_entity\` DROP FOREIGN KEY \`FK_5fd4a799ba5983e06ee6ffb0555\``);
        await queryRunner.query(`DROP TABLE \`orders_entity\``);
        await queryRunner.query(`DROP INDEX \`IDX_6293da38f0cd82179891e274d5\` ON \`client_entity\``);
        await queryRunner.query(`DROP INDEX \`IDX_a69453d1ebe24f51ed0105f57e\` ON \`client_entity\``);
        await queryRunner.query(`DROP TABLE \`client_entity\``);
    }

}
