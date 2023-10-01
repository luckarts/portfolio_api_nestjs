import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMiration1696198209039 implements MigrationInterface {
    name = 'MyMiration1696198209039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`experience\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`date\` varchar(255) NOT NULL, \`year\` int NOT NULL, \`job\` varchar(255) NOT NULL, \`company\` varchar(255) NOT NULL, \`url_company\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`experience_detail\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`experienceId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tag\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`enable\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`img\` varchar(255) NOT NULL, \`title\` varchar(50) NOT NULL, \`description\` varchar(255) NOT NULL, \`path_repo\` varchar(255) NOT NULL, \`path_website\` varchar(255) NOT NULL, \`position\` int NOT NULL, UNIQUE INDEX \`IDX_cb001317127de4d5e323b5c0c4\` (\`title\`), UNIQUE INDEX \`IDX_00f5d34f5cdae2bdf1ba3aef01\` (\`position\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_profile\` (\`id\` int NOT NULL, \`img\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`cv\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project_tag\` (\`projectId\` int NOT NULL, \`tagId\` int NOT NULL, INDEX \`IDX_f6afd36d4272eba4e94907feea\` (\`projectId\`), INDEX \`IDX_d22558732b873ca528a9583112\` (\`tagId\`), PRIMARY KEY (\`projectId\`, \`tagId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`experience_detail\` ADD CONSTRAINT \`FK_1724897eb95b6343287d8c8dc98\` FOREIGN KEY (\`experienceId\`) REFERENCES \`experience\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_tag\` ADD CONSTRAINT \`FK_f6afd36d4272eba4e94907feea9\` FOREIGN KEY (\`projectId\`) REFERENCES \`project\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`project_tag\` ADD CONSTRAINT \`FK_d22558732b873ca528a9583112e\` FOREIGN KEY (\`tagId\`) REFERENCES \`tag\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`project_tag\` DROP FOREIGN KEY \`FK_d22558732b873ca528a9583112e\``);
        await queryRunner.query(`ALTER TABLE \`project_tag\` DROP FOREIGN KEY \`FK_f6afd36d4272eba4e94907feea9\``);
        await queryRunner.query(`ALTER TABLE \`experience_detail\` DROP FOREIGN KEY \`FK_1724897eb95b6343287d8c8dc98\``);
        await queryRunner.query(`DROP INDEX \`IDX_d22558732b873ca528a9583112\` ON \`project_tag\``);
        await queryRunner.query(`DROP INDEX \`IDX_f6afd36d4272eba4e94907feea\` ON \`project_tag\``);
        await queryRunner.query(`DROP TABLE \`project_tag\``);
        await queryRunner.query(`DROP TABLE \`user_profile\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_00f5d34f5cdae2bdf1ba3aef01\` ON \`project\``);
        await queryRunner.query(`DROP INDEX \`IDX_cb001317127de4d5e323b5c0c4\` ON \`project\``);
        await queryRunner.query(`DROP TABLE \`project\``);
        await queryRunner.query(`DROP TABLE \`tag\``);
        await queryRunner.query(`DROP TABLE \`experience_detail\``);
        await queryRunner.query(`DROP TABLE \`experience\``);
    }

}
