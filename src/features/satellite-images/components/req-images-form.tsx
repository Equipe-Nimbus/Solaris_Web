
import { z } from "zod"


import { Map } from "./map";
import { Form, Input } from "@/components/ui/form";

const reqImagesSchema = z.object({
    startDate: z.string().min(1, 'Obrigatório'),
    endDate: z.string().min(1, 'Obrigatório'),
    bbox: z.string().min(1, 'Obrigatório'),
})

export type ReqImagesFormValues = z.infer<typeof reqImagesSchema>

type ReqImagesFormProps = {
    onSubmit: (data: ReqImagesFormValues) => void;
}

const ReqImagesForm = ({ onSubmit }: ReqImagesFormProps) => {

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                schema={reqImagesSchema}
            >
                {({ register, formState }) => (
                    <>
                        <Input
                            type="date"
                            label="Data Início"
                            registration={register('startDate')}
                            error={formState.errors.startDate}
                        />
                        <Input
                            type="date"
                            label="Data Final"
                            registration={register('endDate')}
                            error={formState.errors.endDate}
                        />
                        <Input
                            type="text"
                            label="Bbox"
                            registration={register('bbox')}
                            error={formState.errors.bbox}
                        />
                        <button type="submit">Submit</button>
                        <Map />
                    </>
                )}
            </Form>
        </div>
    );
};

export { ReqImagesForm };