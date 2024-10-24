import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'url',
    password: 'url.2024',
    database: 'url2024',
    synchronize: false,
    entities: ['src/**/*.entity.ts'],
    migrations: ['./src/migrations/*.ts'],
});