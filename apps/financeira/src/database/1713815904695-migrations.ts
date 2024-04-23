import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1713815904695 implements MigrationInterface {
    name = 'Migrations1713815904695'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`transaction_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`idOrder\` int NOT NULL, \`amount\` int NOT NULL, \`status\` enum ('PENDING', 'APROVED', 'REJECTED') NOT NULL, \`userIdId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`credit\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_415c35b9b3b6fe45a3b065030f\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`transaction_entity\` ADD CONSTRAINT \`FK_ee55734652d3333b062292210fa\` FOREIGN KEY (\`userIdId\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`transaction_entity\` DROP FOREIGN KEY \`FK_ee55734652d3333b062292210fa\``);
        await queryRunner.query(`DROP INDEX \`IDX_415c35b9b3b6fe45a3b065030f\` ON \`user_entity\``);
        await queryRunner.query(`DROP TABLE \`user_entity\``);
        await queryRunner.query(`DROP TABLE \`transaction_entity\``);
    }

}
