import z from 'zod';
import { api, endpoints } from './api-client';
import { AxiosResponse } from 'axios';

export const registerSchema = z.object({
    nome_user: z.string().min(3, { message: 'Nome deve ter no mínimo 3 caracteres' }),    
    cpf_user: z.string().length(11, { message: 'CPF deve ter 11 caracteres' }),
    email_user: z.string().email({ message: 'Email inválido' }),
    senha_user: z.string().min(8, { message: 'Senha deve ter no mínimo 8 caracteres' }),
})
export type RegisterFormValues = z.infer<typeof registerSchema>

export const auth = {
    register: async (data: RegisterFormValues): Promise<AxiosResponse> => {
        const res = await api.post(endpoints.auth.register, data)
        return res
    },
}