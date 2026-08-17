import Database from 'better-sqlite3';
import path from 'path';

export class UserDatabase {

    private readonly db: Database.Database;

    constructor() {

        const databasePath = path.resolve(
            __dirname,
            '../../../application/backend/data/kriwex.db'
        );

        this.db = new Database(databasePath);
    }

    findByEmail(email: string) {

        return this.db.prepare(`
            SELECT id, email, role, locked
            FROM users
            WHERE email = ?
        `).get(email) as {
            id: number;
            email: string;
            role: string;
            locked: number;
        } | undefined;
    }

    close() {
        this.db.close();
    }
}