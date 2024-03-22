import { Client } from 'pg';

async function query(queryString, values = []) {
  let queryRes;
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.NODE_ENV === 'production' ? true : false
  });
  try {
    await client.connect();
    queryRes = await client.query(queryString, values);
  } catch (err) {
    console.log(err.message);
  } finally {
    await client.end();
  }

  return queryRes;
}

export default {
  query: query
};
