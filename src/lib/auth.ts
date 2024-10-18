import z from 'zod';
import Cookies from 'js-cookie';

import { api, endpoints } from './api-client';
import { AxiosResponse } from 'axios';
import { AuthResponse, User } from '@/types/types';

export const registerSchema = z.object({
    nome_user: z.string().min(3, { message: 'Nome deve ter no mínimo 3 caracteres' }),
    cpf_user: z.string().length(11, { message: 'CPF deve ter 11 caracteres' }),
    email_user: z.string().email({ message: 'Email inválido' }),
    senha_user: z.string().min(8, { message: 'Senha deve ter no mínimo 8 caracteres' }),
});
export type RegisterFormValues = z.infer<typeof registerSchema>

export const loginSchema = z.object({
    email_user: z.string().email({ message: 'Email inválido' }),
    senha_user: z.string().min(8, { message: 'Senha deve ter no mínimo 8 caracteres' }),
});
export type LoginFormValues = z.infer<typeof loginSchema>

export const auth = {
    register: async (data: RegisterFormValues): Promise<AxiosResponse> => {
        try {
            const res = await api.post(endpoints.auth.register, data)
            return res
        } catch (error) {
            throw error;
        }
    },
    login: async (data: LoginFormValues): Promise<AxiosResponse> => {
        try {
            const res = await api.post<AuthResponse>(endpoints.auth.login, data)

            const { id, nome_user, token } = res.data
            Cookies.set(
                'user',
                JSON.stringify({ id, nome_user }),
                {
                    expires: 1/24, // 1 hora
                    sameSite: 'strict'
                }
            )
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            return res
        } catch (error) {
            throw error;
        }
    },
    logout: () => {
        Cookies.remove('user')
        delete api.defaults.headers['Authorization']
    },
    getUser: (): User => {
        const user = Cookies.get('user')
        return user ? JSON.parse(user) : null
    }
}