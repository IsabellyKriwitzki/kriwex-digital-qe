import { test, expect } from '../../fixtures/api.fixture';
import { invalidLoginData } from '../../../data/authenticationData';

test.describe('Authentication API', () => {

    test('TC-AUTH-API-001 - Successful login', async ({ authApi }) => {

        const response = await authApi.login(
            'customer@kriwex.com',
            'Kriwex123!'
        );

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.token).toBeTruthy();

        expect(responseBody.user).toMatchObject({
            id: 1,
            email: 'customer@kriwex.com',
            role: 'CUSTOMER'
        });
    });


    test('TC-AUTH-API-002 - Invalid password', async ({ authApi }) => {

        const response = await authApi.login(
            'customer@kriwex.com',
            'WrongPassword123!'
        );

        expect(response.status()).toBe(401);

        const responseBody = await response.json();

        expect(responseBody).toEqual({
            message: 'Invalid credentials'
        });
    });


    test('TC-AUTH-API-003 - Unknown user', async ({ authApi }) => {

        const response = await authApi.login(
            'unknown@kriwex.com',
            'Kriwex123!'
        );

        expect(response.status()).toBe(401);

        const responseBody = await response.json();

        expect(responseBody).toEqual({
            message: 'Invalid credentials'
        });
    });


    test('TC-AUTH-API-004 - Locked user', async ({ authApi }) => {

        const response = await authApi.login(
            'locked@kriwex.com',
            'Locked123!'
        );

        expect(response.status()).toBe(403);

        const responseBody = await response.json();

        expect(responseBody).toEqual({
            message: 'User account is locked'
        });
    });


    for (const testData of invalidLoginData) {

        test(
            `${testData.testId} - ${testData.scenario}`,
            async ({ authApi }) => {

                const response = await authApi.login(
                    testData.email,
                    testData.password
                );

                expect(response.status()).toBe(400);

                const responseBody = await response.json();

                expect(responseBody).toEqual({
                    message: 'Email and password are required'
                });
            }
        );
    }

});