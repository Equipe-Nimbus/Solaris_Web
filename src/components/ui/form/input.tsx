import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./field-wrapper";

import { cnMerge } from "@/utils/cnMerge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
    FieldWrapperPassThroughProps & {
        className?: string;
        registration?: Partial<UseFormRegisterReturn>;
    }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, registration, disabled, ...props }, ref) => {
        return (
            <FieldWrapper label={label} error={error}>
                <input
                    type={type}
                    className={cnMerge(className, 'w-full bg-neutral-800 text-neutral-500 px-4 py-1 rounded-lg focus:border focus:border-primary-500 focus:outline-none focus:ring-0', disabled ? 'bg-neutral-600' : '')}
                    ref={ref}
                    disabled={disabled}
                    {...registration}
                    {...props}
                />
            </FieldWrapper>
        )
    }
)
Input.displayName = 'Input';

export { Input };