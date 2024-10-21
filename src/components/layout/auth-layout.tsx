import { ReactNode } from 'react';

type AuthLayoutProps = {
    children: ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center bg-neutral-800'>
            {children}
        </div>
    )
}