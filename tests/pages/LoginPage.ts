import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly message: Locator;

    constructor(page: Page) {

        this.page = page;

        this.emailInput = page.getByLabel('Email');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', {
            name: 'Login'
        });

        this.message = page.locator('#message');
    }

    async navigate() {
        await this.page.goto('/');
    }

    async login(email: string, password: string) {

        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }

    async getMessage() {
        return this.message.textContent();
    }
}