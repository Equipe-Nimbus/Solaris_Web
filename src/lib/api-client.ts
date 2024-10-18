import Axios from "axios";

export const api = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

export const endpoints = {
    auth: {
        register: "/usuarios",
        login: "/login",
    },
    images: {
        req: "/imagens"
    },
    requests: {
        list: "/"
    }
}