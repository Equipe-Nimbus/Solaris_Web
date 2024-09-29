import { useState } from "react";
import { ReqImagesForm, ReqImagesFormValues } from "./req-images-form";
import { reqImages } from "../api/req-images";
import { ImageGrid } from "./image-grid";
import { Spinner } from "@/components/ui/spinner/spinner";

const ReqImageHandler = () => {

    const [images, setImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(data: ReqImagesFormValues) {
        setIsLoading(true);

        await reqImages(data)
            .then((response) => {
                setImages(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <>
            <div className="py-10 flex flex-col gap-3">
                <h1 className="text-neutral-100 text-mheading2 font-bold leading-10 lg:text-heading3">
                    Busca por imagens de
                    <span className="text-primary-500"> satélite</span>
                </h1>
                <p className="text-base text-neutral-300 lg:text-large">Selecione um intervalo de datas e uma área de interesse para visualizar imagens de satélite e identificar a cobertura de nuvens.</p>
            </div>
            <div className="flex flex-col gap-20">
                <ReqImagesForm onSubmit={handleSubmit} />
                {isLoading ? (
                    <Spinner />
                ) : (
                    <ImageGrid imagens={images} />
                )}
            </div>
        </>
    )
}

export { ReqImageHandler };