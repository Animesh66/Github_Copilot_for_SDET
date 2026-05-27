import { test, expect } from '@playwright/test';

const API_BASE = 'https://reqres.in/api';

test.describe('User API', () => {
  test('GET /users returns a list of users', async ({ request }) => {
    const response = await request.get(`${API_BASE}/users?page=1`);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.data).toBeInstanceOf(Array);
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.data[0]).toMatchObject({
      id: expect.any(Number),
      email: expect.stringContaining('@'),
      first_name: expect.any(String),
    });
  });

  test('POST /users creates a new user', async ({ request }) => {
    const newUser = { name: 'Test User', job: 'SDET' };

    const response = await request.post(`${API_BASE}/users`, { data: newUser });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.name).toBe(newUser.name);
    expect(body.job).toBe(newUser.job);
    expect(body.id).toBeDefined();
  });

  test('GET /users/99999 returns 404 for unknown user', async ({ request }) => {
    const response = await request.get(`${API_BASE}/users/99999`);

    expect(response.status()).toBe(404);
  });
});
