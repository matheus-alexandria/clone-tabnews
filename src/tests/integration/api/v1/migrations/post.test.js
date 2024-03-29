it('should POST /api/v1/migrations and return a 200 status code', async () => {
  const response = await fetch(`http://localhost:3000/api/v1/migrations`, {
    method: 'POST'
  });
  const responseBody = await response.json();

  expect(response.status).toBe(200);
  expect(Array.isArray(responseBody)).toBeTruthy();
});
