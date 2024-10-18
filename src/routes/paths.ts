const ROOTS = {
    auth: '/auth',
    app: '/app',
}

export const paths = {
    auth: {
        login: `${ROOTS.auth}/login`,
        register: `${ROOTS.auth}/register`,
    },
    app: {
        reqMap: `${ROOTS.app}/reqMap`,
    }
}