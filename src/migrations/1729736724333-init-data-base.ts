import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDataBase1729736724333 implements MigrationInterface {
    name = 'InitDataBase1729736724333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "author" character varying(255) NOT NULL, "description" text NOT NULL, "isbn" character varying(13) NOT NULL, "publishedAt" date NOT NULL, "availableCopies" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_54337dc30d9bb2c3fadebc69094" UNIQUE ("isbn"), CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "books"`);
    }

}
