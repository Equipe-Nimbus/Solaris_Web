'use client';

import React from 'react';

import { auth, LoginFormValues, loginSchema } from '@/lib/auth';

import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { useNotifications } from '@/components/ui/notifications';
import { useRouter } from 'next/navigation';
import { paths } from '@/routes/paths';

export function LoginForm() {
    const router = useRouter();
    const { addNotification } = useNotifications();

    async function handleLogin(data: LoginFormValues) {
        await auth.login(data)
            .then(() => {
                router.replace(paths.requests.new);
                addNotification({
                    type: 'success',
                    title: 'Login bem-sucedido!'
                })
            })
            .catch((e) => {
                addNotification({
                    type: 'error',
                    title: 'Erro no login',
                    message: e.response?.data?.erro || ''
                })
            })
    }

    return (
        <div className='bg-neutral-700/70 flex flex-col px-10 py-10 rounded-lg gap-5 border border-neutral-600 md:min-w-96'>
            <h2 className='text-large text-neutral-100 font-semibold'>Login</h2>
            <Form
                onSubmit={handleLogin}
                schema={loginSchema}
                className="flex flex-col gap-6 justify-center"
                options={{ mode: 'all' }}
            >
                {({ register, formState }) => (
                    <>
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
                            className='mt-5'
                            variant="primary"
                            type="submit"
                        >
                            Entrar
                        </Button>
                    </>
                )}
            </Form>
        </div>
    );
}
