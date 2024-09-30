'use client';

import { cnMerge } from "@/utils/cnMerge";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm, UseFormProps, UseFormReturn } from "react-hook-form";
import { z, ZodType } from "zod";

type FormProps<TFormValues extends FieldValues, Schema> = {
    onSubmit: SubmitHandler<TFormValues>;
    schema: Schema;
    options?: UseFormProps<TFormValues>;
    className?: string;
    children: (methods: UseFormReturn<TFormValues>) => ReactNode;
}

const Form = <
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Schema extends ZodType<any, any, any>,
    TFormValues extends FieldValues = z.infer<Schema>
>({
    onSubmit,
    schema,
    options,
    className,
    children
}: FormProps<TFormValues, Schema>) => {

    const formMethods = useForm({
        ...options,
        resolver: zodResolver(schema)
    })

    return (
        <FormProvider {...formMethods}>
            <form 
                onSubmit={formMethods.handleSubmit(onSubmit)}
                className={cnMerge(className)}
            >
                {children(formMethods)}
            </form>
        </FormProvider>
    )
}

export { Form };