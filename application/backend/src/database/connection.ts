import Database from 'better-sqlite3';
import path from 'path';

const databasePath = path.resolve(__dirname, '../../data/kriwex.db');

export const db = new Database(databasePath);

db.pragma('journal_mode = WAL');