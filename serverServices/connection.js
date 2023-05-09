import { createPool } from 'mysql2/promise';


export const pool = createPool({
    host: String(process.env.MYSQL_PATH),
    user: String(process.env.MYSQL_USER),
    password: String(process.env.MYSQL_PASSWORD),
    port: Number(process.env.MYSQL_PORT),
    database: String(process.env.MYSQL_DATABASE),
})

