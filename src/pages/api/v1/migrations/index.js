import migrationsRunner from 'node-pg-migrate';
import { join } from 'node:path';

export default async function migrations(request, response) {
  const migrations = await migrationsRunner({
    databaseUrl: process.env.DATABASE_URL,
    dir: join('infra', 'migrations'),
    direction: 'up',
    dryRun: true,
    migrationsTable: 'pgmigrations',
    verbose: true
  });
  response.status(200).json(migrations);
}
