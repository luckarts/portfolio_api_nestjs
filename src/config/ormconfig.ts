import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();
//const dbConfig = config.get('db');

const ormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  migrationsTransactionMode: 'each',
  entities: [__dirname + '/../**/**/*.entity.{js,ts}'],
  logging: false,
  synchronize: true,
  migrationsRun: process.env.NODE_ENV === 'test',
  dropSchema: process.env.NODE_ENV === 'test',
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../database/migrations/**/*{.ts,.js}'],
};

export = ormConfig;
