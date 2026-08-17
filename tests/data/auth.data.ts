export const authUsers = {
    customer: {
        email: 'customer@kriwex.com',
        password: 'Kriwex123!',
    },

    admin: {
        email: 'admin@kriwex.com',
        password: 'Admin123!',
    },

    locked: {
        email: 'locked@kriwex.com',
        password: 'Locked123!',
    },

    unknown: {
        email: 'unknown@kriwex.com',
        password: 'Unknown123!',
    },
};

export const invalidCredentials = {
    wrongPassword: {
        email: authUsers.customer.email,
        password: 'WrongPassword123!',
    },

    missingEmail: {
        email: '',
        password: authUsers.customer.password,
    },

    missingPassword: {
        email: authUsers.customer.email,
        password: '',
    },

    emptyCredentials: {
        email: '',
        password: '',
    },
};