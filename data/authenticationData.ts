export const validLogin = {
    email: 'customer@kriwex.com',
    password: 'Kriwex123!',
};

export const invalidLoginData = [
    {
        testId: 'TC-AUTH-API-005',
        scenario: 'Missing email',
        email: '',
        password: 'Kriwex123!',
    },
    {
        testId: 'TC-AUTH-API-006',
        scenario: 'Missing password',
        email: 'customer@kriwex.com',
        password: '',
    },
    {
        testId: 'TC-AUTH-API-007',
        scenario: 'Empty credentials',
        email: '',
        password: '',
    },
];