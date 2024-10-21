import { FieldError } from "react-hook-form";

import { Label } from "./label";
import { Error } from "./error";

type FieldWrapperProps = {
    label?: string;
    className?: string;
    children: React.ReactNode;
    error?: FieldError | undefined;
}

export type FieldWrapperPassThroughProps = Omit<
    FieldWrapperProps,
    'className' | 'children'
>;

const FieldWrapper = ({ label, error, children }: FieldWrapperProps) => {
    return (
        <div className="flex flex-col gap-2 text-small">
            {label && <Label>{label}</Label>}
            <div>{children}</div>
            <Error errorMessage={error?.message} />
        </div>
    )
}

export { FieldWrapper };