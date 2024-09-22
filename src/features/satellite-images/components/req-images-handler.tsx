// import { useState } from "react";
import { ReqImagesForm, ReqImagesFormValues } from "./req-images-form";

const ReqImageHandler = () => {
    
    // estado para armazenar as imagens
    // const [images, setImages] = useState([]);

    function handleSubmit(data: ReqImagesFormValues) {
        console.log(data);

        // implementar a chamada a API e atualizar o estado das imagens
    }

    return (
        <div>
            <ReqImagesForm onSubmit={handleSubmit}/>

            {/* implementar o componente que irá exibir as imagens */}
        </div>
    )
}

export { ReqImageHandler };