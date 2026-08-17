import { test, expect } from '../../fixtures/auth.fixture';

test.describe('Authenticated User', () => {

    test('TC-UI-AUTH-003 - Customer can authenticate successfully', async ({
                                                                               authenticatedPage
                                                                           }) => {

        await expect(authenticatedPage.message)
            .toHaveText('Login successful');
    });

});