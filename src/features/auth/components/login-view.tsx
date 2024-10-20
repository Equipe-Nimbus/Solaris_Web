import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LoginForm } from './login-form';

export default function LoginView() {
    return (
        <div className='flex flex-col gap-10 items-center'>
            <Image src="/logo.svg" alt="logo" width={150} height={100} />
            <LoginForm />
            <span className='text-small text-neutral-400'>
                Não possui uma conta?{' '}
                <Link href="/auth/register" className='text-small text-primary-500 hover:text-primary-600 hover:underline'>Cadastrar</Link>
            </span>
        </div>
    );
}
