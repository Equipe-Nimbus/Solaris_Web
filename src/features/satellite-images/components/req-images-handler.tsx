import { useEffect, useState } from "react";
import { ReqImagesForm, ReqImagesFormValues } from "./req-images-form";
import { reqImages } from "../api/req-images";

const ReqImageHandler = () => {

    // estado para armazenar as imagens
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

    useEffect(() => { console.log(images) }, [images]);

    return (
        <div>
            <div className="py-10 flex flex-col gap-3">
                <h1 className="text-neutral-100 text-mheading2 font-bold leading-10 lg:text-heading3">
                    Busca por imagens de
                    <span className="text-primary-500"> satélite</span>
                </h1>
                <p className="text-base text-neutral-300 lg:text-large">Selecione um intervalo de datas e uma área de interesse para visualizar imagens de satélite e identificar a cobertura de nuvens.</p>
            </div>
            <ReqImagesForm onSubmit={handleSubmit} />
        </div>
    )
}

export { ReqImageHandler };