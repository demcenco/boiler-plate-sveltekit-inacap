import db from "$lib/db";

let tetst = 0;
export async function get() {
	const {rows} = await db.query('SELECT 1')
	console.log(rows);
	tetst++;
	console.log(tetst);
	return { body: { hello: 'world' } };
}
