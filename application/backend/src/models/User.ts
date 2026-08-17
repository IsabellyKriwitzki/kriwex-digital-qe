export type UserRole = 'CUSTOMER' | 'ADMIN';

export interface User {
    id: number;
    email: string;
    password: string;
    role: UserRole;
    locked: boolean;
}