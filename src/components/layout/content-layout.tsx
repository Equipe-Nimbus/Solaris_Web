import { ReactNode } from 'react';
import { Header } from '../ui/header';

type ContentLayoutProps = {
    children: ReactNode
}

export const ContentLayout = ({ children }: ContentLayoutProps) => {
    return (
        <>
            <Header />
            <div className='min-h-screen bg-neutral-800 flex flex-col items-center gap-6 pb-20'>
                <div className='w-11/12 mt-20 xl:max-w-[1280px]'>
                    {children}
                </div>
            </div>
        </>
    )
}