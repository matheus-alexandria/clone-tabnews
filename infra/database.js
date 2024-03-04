import { Client } from 'pg';

async function query(queryString) {
  const client = new Client({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD
  });
  await client.connect();

  const res = await client.query(queryString);

  await client.end();

  return res;
}

export default {
  query: query
};
