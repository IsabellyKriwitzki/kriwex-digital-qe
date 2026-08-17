import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AuthApi } from '../../api/clients/auth.api';
import { UserDatabase } from '../../database/clients/user.database';
import { authUsers } from '../../data/auth.data';

test.describe('Authentication Cross-Layer E2E', () => {

    test('TC-E2E-AUTH-001 - Customer authentication across UI, API and Database', async ({
                                                                                             page,
                                                                                             request
                                                                                         }) => {

        const user = authUsers.customer;

        // -------------------------
        // UI
        // -------------------------

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            user.email,
            user.password
        );

        await expect(loginPage.message)
            .toHaveText('Login successful');


        // -------------------------
        // API
        // -------------------------

        const authApi = new AuthApi(request);

        const response = await authApi.login(
            user.email,
            user.password
        );

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.user.email)
            .toBe(user.email);

        expect(responseBody.user.role)
            .toBe('CUSTOMER');

        expect(responseBody.token)
            .toBeDefined();


        // -------------------------
        // DATABASE
        // -------------------------

        const database = new UserDatabase();

        const databaseUser =
            database.findByEmail(user.email);

        expect(databaseUser)
            .toBeDefined();

        expect(databaseUser?.email)
            .toBe(user.email);

        expect(databaseUser?.role)
            .toBe('CUSTOMER');

        expect(databaseUser?.locked)
            .toBe(0);

        database.close();

    });

});