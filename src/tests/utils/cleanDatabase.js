import database from 'infra/database';

export async function cleanDatabase() {
  await database.query('DROP SCHEMA public CASCADE; CREATE SCHEMA public;')
}
