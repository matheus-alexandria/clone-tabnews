it('should GET /api/v1/status and return a 200 status code', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status');

  expect(response.status).toBe(200);
});
