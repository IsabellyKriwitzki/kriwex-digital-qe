import { test as base, expect } from '@playwright/test';
import { DatabaseClient } from '../database/databaseClient';

type DatabaseFixtures = {
    database: DatabaseClient;
};

export const test = base.extend<DatabaseFixtures>({
    database: async ({}, use) => {
        const database = new DatabaseClient();

        await use(database);

        database.close();
    },
});

export { expect };