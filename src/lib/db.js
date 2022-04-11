import pg from 'pg';
const { Pool } = pg;
const db = new Pool({
	user: 'postgres',
	port: 5432,
	host: 'localhost',
	database: 'example',
	password: 'example'
});

export default db;
