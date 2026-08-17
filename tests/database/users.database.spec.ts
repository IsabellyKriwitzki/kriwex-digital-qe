import { test, expect } from '../fixtures/database.fixture';

test.describe('Users Database Validation', () => {

    test('TC-DB-001 - Customer user exists in database', async ({ database }) => {

        const user = database.query<{
            id: number;
            email: string;
            role: string;
            locked: number;
        }>(
            `
                SELECT id, email, role, locked
                FROM users
                WHERE email = ?
            `,
            'customer@kriwex.com'
        );

        expect(user).toBeDefined();
        expect(user?.id).toBe(1);
        expect(user?.email).toBe('customer@kriwex.com');
        expect(user?.role).toBe('CUSTOMER');
        expect(user?.locked).toBe(0);
    });


    test('TC-DB-002 - Admin user exists in database', async ({ database }) => {

        const user = database.query<{
            id: number;
            email: string;
            role: string;
            locked: number;
        }>(
            `
            SELECT id, email, role, locked
            FROM users
            WHERE email = ?
            `,
            'admin@kriwex.com'
        );

        expect(user).toBeDefined();
        expect(user?.id).toBe(2);
        expect(user?.email).toBe('admin@kriwex.com');
        expect(user?.role).toBe('ADMIN');
        expect(user?.locked).toBe(0);
    });


    test('TC-DB-003 - Locked user is correctly flagged', async ({ database }) => {

        const user = database.query<{
            id: number;
            email: string;
            role: string;
            locked: number;
        }>(
            `
            SELECT id, email, role, locked
            FROM users
            WHERE email = ?
            `,
            'locked@kriwex.com'
        );

        expect(user).toBeDefined();
        expect(user?.id).toBe(3);
        expect(user?.email).toBe('locked@kriwex.com');
        expect(user?.role).toBe('CUSTOMER');
        expect(user?.locked).toBe(1);
    });

});