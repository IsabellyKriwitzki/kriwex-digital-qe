import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import {
    authUsers,
    invalidCredentials
} from '../../data/auth.data';

test.describe('Authentication UI', () => {

    test('TC-UI-AUTH-001 - Successful login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            authUsers.customer.email,
            authUsers.customer.password
        );

        await expect(loginPage.message)
            .toHaveText('Login successful');
    });


    test('TC-UI-AUTH-002 - Invalid password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            invalidCredentials.wrongPassword.email,
            invalidCredentials.wrongPassword.password
        );

        await expect(loginPage.message)
            .toHaveText('Invalid credentials');
    });

});