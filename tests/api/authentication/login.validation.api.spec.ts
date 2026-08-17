import { test, expect } from '@playwright/test';

test.describe('Authentication API Validation', () => {

    test('TC-AUTH-VALIDATION-001 - Invalid email format', async ({ request }) => {

        const response = await request.post('/api/auth/login', {
            data: {
                email: 'invalid-email',
                password: 'Kriwex123!'
            }
        });

        expect(response.status()).toBe(400);

        const responseBody = await response.json();

        expect(responseBody.message).toBeDefined();
    });


    test('TC-AUTH-VALIDATION-002 - Missing email', async ({ request }) => {

        const response = await request.post('/api/auth/login', {
            data: {
                password: 'Kriwex123!'
            }
        });

        expect(response.status()).toBe(400);

        const responseBody = await response.json();

        expect(responseBody.message)
            .toBe('Email and password are required');
    });


    test('TC-AUTH-VALIDATION-003 - Missing password', async ({ request }) => {

        const response = await request.post('/api/auth/login', {
            data: {
                email: 'customer@kriwex.com'
            }
        });

        expect(response.status()).toBe(400);

        const responseBody = await response.json();

        expect(responseBody.message)
            .toBe('Email and password are required');
    });


    test('TC-AUTH-VALIDATION-004 - Empty request body', async ({ request }) => {

        const response = await request.post('/api/auth/login', {
            data: {}
        });

        expect(response.status()).toBe(400);

        const responseBody = await response.json();

        expect(responseBody.message)
            .toBe('Email and password are required');
    });


    test('TC-AUTH-VALIDATION-005 - Null credentials', async ({ request }) => {

        const response = await request.post('/api/auth/login', {
            data: {
                email: null,
                password: null
            }
        });

        expect(response.status()).toBe(400);

        const responseBody = await response.json();

        expect(responseBody.message).toBeDefined();
    });


    test('TC-AUTH-VALIDATION-006 - Password is not exposed', async ({ request }) => {

        const response = await request.post('/api/auth/login', {
            data: {
                email: 'customer@kriwex.com',
                password: 'Kriwex123!'
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.user.password).toBeUndefined();
    });

});