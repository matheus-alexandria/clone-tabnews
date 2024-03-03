import { Client } from 'pg';

async function query(queryString) {
  const client = new Client({
    host: 'localhost',
    port: '5430',
    user: 'postgres',
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


