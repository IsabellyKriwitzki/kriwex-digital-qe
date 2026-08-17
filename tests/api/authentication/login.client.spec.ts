import { test, expect } from '../../fixtures/api.fixture';
import { authUsers } from '../../data/auth.data';

test.describe('Authentication API Client', () => {

    test('TC-AUTH-CLIENT-001 - Successful login', async ({
                                                             authApi
                                                         }) => {

        const response = await authApi.login(
            authUsers.customer.email,
            authUsers.customer.password
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.token).toBeDefined();
        expect(body.user.email)
            .toBe(authUsers.customer.email);
        expect(body.user.role)
            .toBe('CUSTOMER');
    });

});