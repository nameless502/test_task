import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1709137539815 implements MigrationInterface {
    name = 'Initial1709137539815';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "temporary_actor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(1023) NOT NULL, CONSTRAINT "UQ_d452a7040f3c08451dc9c2f3ba9" UNIQUE ("name"))`
        );
        await queryRunner.query(
            `INSERT INTO "temporary_actor"("id", "name") SELECT "id", "name" FROM "actor"`
        );
        await queryRunner.query(`DROP TABLE "actor"`);
        await queryRunner.query(
            `ALTER TABLE "temporary_actor" RENAME TO "actor"`
        );
        await queryRunner.query(
            `CREATE TABLE "temporary_actor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(1023) NOT NULL, CONSTRAINT "UQ_d452a7040f3c08451dc9c2f3ba9" UNIQUE ("name"))`
        );
        await queryRunner.query(
            `INSERT INTO "temporary_actor"("id", "name") SELECT "id", "name" FROM "actor"`
        );
        await queryRunner.query(`DROP TABLE "actor"`);
        await queryRunner.query(
            `ALTER TABLE "temporary_actor" RENAME TO "actor"`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "actor" RENAME TO "temporary_actor"`
        );
        await queryRunner.query(
            `CREATE TABLE "actor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(1023) NOT NULL, CONSTRAINT "UQ_d452a7040f3c08451dc9c2f3ba9" UNIQUE ("name"))`
        );
        await queryRunner.query(
            `INSERT INTO "actor"("id", "name") SELECT "id", "name" FROM "temporary_actor"`
        );
        await queryRunner.query(`DROP TABLE "temporary_actor"`);
        await queryRunner.query(
            `ALTER TABLE "actor" RENAME TO "temporary_actor"`
        );
        await queryRunner.query(
            `CREATE TABLE "actor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(1023) NOT NULL, CONSTRAINT "UQ_d452a7040f3c08451dc9c2f3ba9" UNIQUE ("name"))`
        );
        await queryRunner.query(
            `INSERT INTO "actor"("id", "name") SELECT "id", "name" FROM "temporary_actor"`
        );
        await queryRunner.query(`DROP TABLE "temporary_actor"`);
    }
}
