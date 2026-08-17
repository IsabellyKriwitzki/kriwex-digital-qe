import Database from 'better-sqlite3';
import path from 'path';

export class DatabaseClient {

    private db: Database.Database;

    constructor() {
        const databasePath = path.resolve(
            __dirname,
            '../../application/backend/data/kriwex.db'
        );

        this.db = new Database(databasePath);
    }

    query<T>(sql: string, ...params: unknown[]): T | undefined {
        return this.db.prepare(sql).get(...params) as T | undefined;
    }

    close(): void {
        this.db.close();
    }
}