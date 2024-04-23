import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1713818047414 implements MigrationInterface {
    name = 'Migrations1713818047414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orders_entity\` DROP FOREIGN KEY \`FK_5fd4a799ba5983e06ee6ffb0555\``);
        await queryRunner.query(`ALTER TABLE \`orders_entity\` ADD CONSTRAINT \`FK_5fd4a799ba5983e06ee6ffb0555\` FOREIGN KEY (\`clientIdId\`) REFERENCES \`client_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orders_entity\` DROP FOREIGN KEY \`FK_5fd4a799ba5983e06ee6ffb0555\``);
        await queryRunner.query(`ALTER TABLE \`orders_entity\` ADD CONSTRAINT \`FK_5fd4a799ba5983e06ee6ffb0555\` FOREIGN KEY (\`clientIdId\`) REFERENCES \`client_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

}
