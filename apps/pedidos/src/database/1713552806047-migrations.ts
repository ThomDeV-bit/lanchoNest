import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1713552806047 implements MigrationInterface {
    name = 'Migrations1713552806047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_19dde55e57d1bc893b0d32498d\` ON \`orders_entity\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_19dde55e57d1bc893b0d32498d\` ON \`orders_entity\` (\`email\`)`);
    }

}
