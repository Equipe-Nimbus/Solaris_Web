
import { z } from "zod"


import { Map } from "./map";
import { Form, Input } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

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
        <Form
            onSubmit={onSubmit}
            schema={reqImagesSchema}
            className="bg-neutral-700 flex flex-col px-10 py-5 rounded-lg gap-5 border border-neutral-600"
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
                        registration={register('bbox')}
                        error={formState.errors.bbox}
                        className="hidden"
                    />
                    <Map />
                    <div className="flex justify-center">
                        <Button
                            variant="outline"
                            type="submit"
                        >
                            Buscar Imagens
                        </Button>
                    </div>
                </>
            )}
        </Form>
    );
};

export { ReqImagesForm };