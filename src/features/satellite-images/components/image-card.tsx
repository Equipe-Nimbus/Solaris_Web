import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { ArrowsOutSimple } from "@phosphor-icons/react";
import { SatelliteImage } from "@/types/types";
import { ImageModal } from "./image-modal";

type ImageCardProps = {
    imagem: SatelliteImage;
}

const ImageCard = ({ imagem }: ImageCardProps) => {
    const [cardOpen, setCardOpen] = useState<boolean>(false);
    const [isImageVisible, setImageVisible] = useState<boolean>(true);
    const [isMaskVisible, setMaskVisible] = useState<boolean>(false);

    return (
        <>
            <div className="relative w-full min-h-72 h-fit p-4 bg-neutral-700 border border-neutral-600 rounded-lg flex flex-col items-center">
                <div className="relative w-full h-72 z-0">
                    <Image
                        src={imagem.link_thumbnail}
                        className={`w-full h-full object-contain ${isMaskVisible ? 'opacity-70' : 'opacity-100'}`}
                        width={300}
                        height={300}
                        alt="Imagem de satélite"
                    />
                    <Image
                        src={imagem.link_preview_mascara}
                        className={`absolute top-0 left-0 w-full h-full object-contain ${isMaskVisible ? 'opacity-100' : 'opacity-0'}`}
                        width={300}
                        height={300}
                        alt="Máscara"
                    />
                </div>
                <div className="flex space-between items-center w-full gap-2 mt-4">
                    <Button variant="ghost" onClick={() => { setMaskVisible(prevState => !prevState) }} className={`${isMaskVisible ? 'bg-primary-100/15' : ''}`}>
                        Alternar
                    </Button>
                    <ArrowsOutSimple
                        size={32}
                        className="text-neutral-400 p-1 hover:bg-neutral-400/30 rounded duration-200 cursor-pointer"
                        onClick={() => setCardOpen(true)}
                    />
                </div>
            </div>

            <ImageModal
                cardOpen={cardOpen}
                setCardOpen={setCardOpen}
                imagem={imagem}
                isImageVisible={isImageVisible}
                setImageVisible={setImageVisible}
                isMaskVisible={isMaskVisible}
                setMaskVisible={setMaskVisible}
            />
        </>
    );
};

export { ImageCard };