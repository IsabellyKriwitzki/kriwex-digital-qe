import { UserRepository } from '../repositories/userRepository';

const userRepository = new UserRepository();

export class AuthService {

    login(email: string, password: string) {

        const user = userRepository.findByEmail(email);

        if (!user) {
            return {
                success: false,
                statusCode: 401,
                message: 'Invalid credentials'
            };
        }

        if (user.locked) {
            return {
                success: false,
                statusCode: 403,
                message: 'User account is locked'
            };
        }

        if (user.password !== password) {
            return {
                success: false,
                statusCode: 401,
                message: 'Invalid credentials'
            };
        }

        return {
            success: true,
            statusCode: 200,
            token: `mock-token-${user.id}`,
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        };
    }
}