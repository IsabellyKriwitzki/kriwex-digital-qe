import fs from 'fs';
import path from 'path';
import { db } from './connection';

const schemaPath = path.resolve(__dirname, 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf-8');

db.exec(schema);

const insertUser = db.prepare(`
    INSERT OR IGNORE INTO users
    (id, email, password, role, locked)
    VALUES (?, ?, ?, ?, ?)
`);

const users = [
    [1, 'customer@kriwex.com', 'Kriwex123!', 'CUSTOMER', 0],
    [2, 'admin@kriwex.com', 'Admin123!', 'ADMIN', 0],
    [3, 'locked@kriwex.com', 'Locked123!', 'CUSTOMER', 1]
];

const insertMany = db.transaction(() => {
    for (const user of users) {
        insertUser.run(...user);
    }
});

insertMany();

console.log('Database seeded successfully.');