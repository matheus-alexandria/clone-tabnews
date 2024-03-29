import { cleanDatabase } from 'src/tests/utils/cleanDatabase'

describe('Dry Run migrations', () => {
  beforeAll(async () => {
    await cleanDatabase();
  });

  it('should GET /api/v1/migrations and return a 200 status code', async () => {
    const response = await fetch(`http://localhost:${process.env.PORT}/api/v1/migrations`);
    const responseBody = await response.json();

    expect(response.status).toBe(200);
    expect(Array.isArray(responseBody)).toBeTruthy();
    expect(responseBody.length).toBeGreaterThan(0);
  });
});
