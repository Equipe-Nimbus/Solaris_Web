import { cnMerge } from '@/utils/cnMerge';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { ReactNode } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
VariantProps<typeof buttonVariants> & {
    children: ReactNode;
    variant: 'primary' | 'outline' | 'ghost'; 
}

const buttonVariants = cva(
    'w-full px-4 py-2 font-semibold rounded-md duration-300 text-button lg:w-fit',
    {
        variants: {
            variant: {
                primary: 'bg-primary-500 hover:bg-primary-600 active:bg-primary-700',
                outline: 'border border-primary-500 text-primary-500 hover:bg-primary-100/10 active:bg-primary-100/15',
                ghost: 'text-primary-500 hover:bg-primary-100/10 active:bg-primary-100/15'
            }
        }
    }
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant, className, type, ...props}, ref) => {

        return (
            <button 
                className={cnMerge(buttonVariants({ variant}), className)}
                type={type}
                ref={ref}
                {...props}
            >
                { children }
            </button>
        )
    }
)

Button.displayName = 'Button';
export { Button };