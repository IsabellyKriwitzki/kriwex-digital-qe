import { db } from '../database/connection';
import { User } from '../models/User';

export class UserRepository {

    findByEmail(email: string): User | undefined {
        const user = db.prepare(`
            SELECT id, email, password, role, locked
            FROM users
            WHERE email = ?
        `).get(email) as User | undefined;

        return user;
    }
}