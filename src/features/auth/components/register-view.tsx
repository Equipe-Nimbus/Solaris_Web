import React from 'react';
import { RegisterForm } from './register-form';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterView() {
    return (
        <div className='flex flex-col gap-10 items-center'>
            <Image src="/logo.svg" alt="logo" width={150} height={100} />
            <RegisterForm />
            <span className='text-small text-neutral-400'>
                Já possui uma conta?{' '}
                <Link href="/auth/login" className='text-small text-primary-500 hover:text-primary-600 hover:underline'>Login</Link>
            </span>
        </div>
    );
}
