import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SvgImage } from "@/components/ui/svgImage";

import { ArrowsOutSimple } from "@phosphor-icons/react";
import { Modal, ModalContent } from "@/components/ui/modal";

type ImageCardProps = {
    imagemOriginal: string;
    imagemProcessada: string;
}

const ImageCard = ({ imagemOriginal, imagemProcessada }: ImageCardProps) => {
    const [cardOpen, setCardOpen] = useState<boolean>(false);
    const [isImageVisible, setImageVisible] = useState<boolean>(true);
    const [isMaskVisible, setMaskVisible] = useState<boolean>(false);

    return (
        <>
            <div className="relative w-full min-h-72 h-fit p-4 bg-neutral-700 border border-neutral-600 rounded-lg flex flex-col items-center">
                <div className="relative w-full h-72 z-0">
                    <Image
                        src={imagemOriginal}
                        className="w-full h-full object-contain"
                        width={300}
                        height={300}
                        alt="Máscara"
                    />
                    <SvgImage
                        compressedImage={imagemProcessada}
                        className={`absolute top-0 left-0 w-full h-full object-contain ${isMaskVisible ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div className="flex space-between items-center w-full gap-2 mt-4">
                    <Button variant="ghost" onClick={() => { setMaskVisible(prevState => !prevState) }} className={`${isMaskVisible ? 'bg-primary-100/15' : ''}`}>
                        Alternar
                    </Button>
                    <ArrowsOutSimple
                        size={36}
                        className="text-neutral-400 p-1 hover:bg-neutral-400/30 rounded duration-200 cursor-pointer"
                        onClick={() => setCardOpen(true)}
                    />
                </div>
            </div>
            <Modal isOpen={cardOpen} onClose={() => setCardOpen(false)}>
                <ModalContent>
                    <div className="relative w-full h-96">
                        <Image
                            src={imagemOriginal}
                            className={`absolute top-0 left-0 w-full h-full object-contain ${isImageVisible ? 'opacity-100' : 'opacity-0'}`}
                            width={300}
                            height={300}
                            alt="Máscara"
                        />
                        <SvgImage
                            compressedImage={imagemProcessada}
                            className={`absolute top-0 left-0 w-full h-full object-contain ${isMaskVisible ? 'opacity-100' : 'opacity-0'}`}
                        />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-large text-neutral-100">Visualização</h2>
                        <input type="checkbox" onChange={() => setImageVisible(prevState => !prevState)}/>
                        <input type="checkbox" onChange={() => setMaskVisible(prevState => !prevState)}/>
                    </div>

                </ModalContent>
            </Modal>
        </>
    );
};

export { ImageCard };