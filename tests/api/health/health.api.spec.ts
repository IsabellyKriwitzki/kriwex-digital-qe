import { test, expect } from '@playwright/test';

test.describe('Health API', () => {

    test('TC-HEALTH-API-001 - API health check', async ({ request }) => {

        const response = await request.get('/api/health');

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.status).toBe('UP');
        expect(responseBody.service).toBe('Kriwex Digital API');
    });

});