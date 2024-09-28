import { ReactNode } from 'react';
import { Header } from '../ui/header';

type ContentLayoutProps = {
    children: ReactNode
}

export const ContentLayout = ({ children }: ContentLayoutProps) => {
    return (
        <body className='antialised'>
            <Header />
            <div className=' flex flex-col gap-6 p-6 lg:px-48'>
                {children}
            </div>
        </body>
    )
}