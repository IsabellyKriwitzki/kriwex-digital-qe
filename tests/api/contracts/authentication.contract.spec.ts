import { test, expect } from '../../fixtures/api.fixture';

test.describe('Authentication API Contract', () => {

    test('TC-AUTH-CONTRACT-001 - Login response schema', async ({ authApi }) => {

        const response = await authApi.login(
            'customer@kriwex.com',
            'Kriwex123!'
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body).toHaveProperty('token');
        expect(body).toHaveProperty('user');

        expect(typeof body.token).toBe('string');

        expect(body.user).toHaveProperty('id');
        expect(body.user).toHaveProperty('email');
        expect(body.user).toHaveProperty('role');

        expect(typeof body.user.id).toBe('number');
        expect(typeof body.user.email).toBe('string');
        expect(typeof body.user.role).toBe('string');
    });
});