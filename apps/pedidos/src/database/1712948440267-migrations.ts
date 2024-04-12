import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1712948440267 implements MigrationInterface {
    name = 'Migrations1712948440267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cliente_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`numero\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_03c3b6839b6fc10cc890811f2f\` (\`numero\`), UNIQUE INDEX \`IDX_e166ddfcd86395a79c00f5a1e6\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pedidos_entities\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`nome\` varchar(100) NOT NULL, \`preco\` int NOT NULL, \`descricao\` varchar(255) NOT NULL, \`createAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`status\` enum ('PENDENTE', 'PAGO', 'CANCELADO') NOT NULL, \`clienteIdId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pedidos_entities\` ADD CONSTRAINT \`FK_ee61f60158d6e3150a6203376a3\` FOREIGN KEY (\`clienteIdId\`) REFERENCES \`cliente_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pedidos_entities\` DROP FOREIGN KEY \`FK_ee61f60158d6e3150a6203376a3\``);
        await queryRunner.query(`DROP TABLE \`pedidos_entities\``);
        await queryRunner.query(`DROP INDEX \`IDX_e166ddfcd86395a79c00f5a1e6\` ON \`cliente_entity\``);
        await queryRunner.query(`DROP INDEX \`IDX_03c3b6839b6fc10cc890811f2f\` ON \`cliente_entity\``);
        await queryRunner.query(`DROP TABLE \`cliente_entity\``);
    }

}
