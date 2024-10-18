const ROOTS = {
    auth: '/auth',
    app: '/app',
    requests: '/app/requests',
}

export const paths = {
    auth: {
        login: `${ROOTS.auth}/login`,
        register: `${ROOTS.auth}/register`,
    },
    requests: {
        new: `${ROOTS.requests}/new`,
        list: `${ROOTS.requests}/list`, 
    }
}