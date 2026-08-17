import { APIRequestContext } from '@playwright/test';

export class AuthApi {

    constructor(
        private readonly request: APIRequestContext
    ) {}

    async login(email: string, password: string) {

        return this.request.post(
            'http://localhost:3000/api/auth/login',
            {
                data: {
                    email,
                    password,
                },
            }
        );
    }
}