import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { authUsers } from '../data/auth.data';

type AuthFixtures = {
    authenticatedPage: LoginPage;
};

export const test = base.extend<AuthFixtures>({

    authenticatedPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            authUsers.customer.email,
            authUsers.customer.password
        );

        await expect(loginPage.message)
            .toHaveText('Login successful');

        await use(loginPage);
    },
});

export { expect };