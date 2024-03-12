import database from "infra/database";

export default async function status(request, response) {
  const version = await database.query(
    `
      SELECT setting AS version
      FROM pg_settings
      WHERE name = 'server_version'
    `
  );
  const maxConnections = await database.query(
    `
      SELECT setting AS max_connections
      FROM pg_settings
      WHERE name = 'max_connections'
    `
  );
  const connections = await database.query("SELECT pid FROM pg_stat_activity");

  const updatedAt = new Date().toISOString();
  response.status(200).json({
    updated_at: updatedAt,
    database: {
      version: version.rows[0].version,
      max_connections: Number(maxConnections.rows[0].max_connections),
      opened_connections: connections.rows.length
    }
  });
}
