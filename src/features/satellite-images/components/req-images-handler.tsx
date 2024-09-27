// import { useState } from "react";
import { ReqImagesForm, ReqImagesFormValues } from "./req-images-form";
import GaleriaJson from "./imagens-json";

const ReqImageHandler = () => {

    // estado para armazenar as imagens
    // const [images, setImages] = useState([]);

    function handleSubmit(data: ReqImagesFormValues) {
        console.log(data);

        // implementar a chamada a API e atualizar o estado das imagens
    }

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