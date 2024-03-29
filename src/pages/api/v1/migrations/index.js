import migrationsRunner from 'node-pg-migrate';
import { join } from 'node:path';

export default async function migrations(request, response) {
  if (request.method === 'GET') {
    const migrations = await runMigrations(true);

    return response.status(200).json(migrations);
  }

  if (request.method === 'POST') {
    const migrations = await runMigrations(false);

    return response.status(200).json(migrations);
  }

  response.status(405).json();
}

async function runMigrations(dryRun) {
  return await migrationsRunner({
    databaseUrl: process.env.DATABASE_URL,
    dir: join('infra', 'migrations'),
    direction: 'up',
    dryRun: dryRun,
    migrationsTable: 'pgmigrations',
    verbose: true
  });
}
