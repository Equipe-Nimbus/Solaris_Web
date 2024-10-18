'use client';

import React from 'react';

import { auth, RegisterFormValues, registerSchema } from '@/lib/auth';

import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { useNotifications } from '@/components/ui/notifications';

export function RegisterForm() {
    const { addNotification } = useNotifications();

    async function handleRegister(data: RegisterFormValues) {
        await auth.register(data)
            .then(() => {
                addNotification({
                    type: 'success',
                    title: 'Cadastro bem-sucedido!',
                    message: 'Você já pode fazer login.'
                })
            })
            .catch((e) => {
                addNotification({
                    type: 'error',
                    title: 'Erro no cadastro',
                    message: e.response?.data?.erro || ''
                })
            })
    }

    return (
        <div className='bg-neutral-700 flex flex-col px-10 py-10 rounded-lg gap-5 border border-neutral-600 md:min-w-96'>
            <h2 className='text-large text-neutral-100 font-semibold'>Cadastro</h2>
            <Form
                onSubmit={handleRegister}
                schema={registerSchema}
                className="flex flex-col gap-6 justify-center"
                options={{ mode: 'all' }}
            >
                {({ register, formState }) => (
                    <>
                        <Input
                            label="Nome"
                            registration={register('nome_user')}
                            error={formState.errors.nome_user}
                        />
                        <Input
                            label="CPF"
                            registration={register('cpf_user')}
                            error={formState.errors.cpf_user}
                        />
                        <Input
                            label="Email"
                            registration={register('email_user')}
                            error={formState.errors.email_user}
                        />
                        <Input
                            label="Senha"
                            type='password'
                            registration={register('senha_user')}
                            error={formState.errors.senha_user}
                        />
                        <Button
                            variant="primary"
                            type="submit"
                        >
                            Cadastrar
                        </Button>
                    </>
                )}
            </Form>
        </div>
    );
}
