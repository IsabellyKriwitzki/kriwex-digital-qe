import { test as base } from '@playwright/test';
import { AuthApi } from '../api/clients/auth.api';

type ApiFixtures = {
    authApi: AuthApi;
};

export const test = base.extend<ApiFixtures>({
    authApi: async ({ request }, use) => {

        const authApi = new AuthApi(request);

        await use(authApi);
    },
});

export { expect } from '@playwright/test';