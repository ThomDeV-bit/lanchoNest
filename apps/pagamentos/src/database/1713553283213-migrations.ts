import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1713553283213 implements MigrationInterface {
    name = 'Migrations1713553283213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`payments_entity\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payments_entity\` CHANGE \`status\` \`status\` enum ('PENDING', 'APROVED', 'REJECTED') NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`payments_entity\` CHANGE \`status\` \`status\` enum ('APROVED', 'REJECTED') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payments_entity\` DROP COLUMN \`email\``);
    }

}
