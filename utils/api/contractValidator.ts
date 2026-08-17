import { test, expect } from '@playwright/test';
import { AuthApi } from '../../../api/AuthApi';
import { validateLoginResponse } from '../../../utils/api/contractValidator';

test.describe('Authentication API Contract', () => {

    test('TC-AUTH-CONTRACT-001 - Login response schema', async ({ request }) => {

        const authApi = new AuthApi(request);

        const response = await authApi.login(
            'customer@kriwex.com',
            'Kriwex123!'
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

        validateLoginResponse(body);
    });
});