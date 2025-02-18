import pg from 'pg';
import { config } from '../config/config.js'
const Pool = pg.Pool;
const pool = new Pool(config.db);


export async function query(sencente, values) {
    const {rows, fields} = await pool.query(sencente, values);
    return rows;
}

