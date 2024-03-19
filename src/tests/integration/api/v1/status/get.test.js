it('should GET /api/v1/status and return a 200 status code', async () => {
  const response = await fetch(`http://localhost:3001/api/v1/status`);
  const responseBody = await response.json();

  expect(response.status).toBe(200);

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  expect(responseBody.dependencies.database).toEqual(expect.objectContaining({
    version: expect.any(String),
    max_connections: expect.any(Number),
    opened_connections: 1
  }));
});
