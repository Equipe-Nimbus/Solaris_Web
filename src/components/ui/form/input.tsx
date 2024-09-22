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
    ({ className, type, label, error, registration, ...props }, ref) => {
        return (
            <FieldWrapper label={label} error={error}>
                <input
                    type={type}
                    className={cnMerge(className)}
                    ref={ref}
                    {...registration}
                    {...props}
                />
            </FieldWrapper>
        )
    }
)
Input.displayName = 'Input';

export { Input };