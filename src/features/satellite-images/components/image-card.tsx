import { useMemo, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SvgImage } from "@/components/ui/svgImage";

import { ArrowsOutSimple } from "@phosphor-icons/react";
import { SatelliteImage } from "@/types/types";
import { decompressSvg } from "@/utils/decompressSvg";
import { ImageModal } from "./image-modal";

type ImageCardProps = {
    imagem: SatelliteImage;
}

const ImageCard = ({ imagem }: ImageCardProps) => {
    const [cardOpen, setCardOpen] = useState<boolean>(false);
    const [isImageVisible, setImageVisible] = useState<boolean>(true);
    const [isMaskVisible, setMaskVisible] = useState<boolean>(false);

    const svgImage = useMemo(() => {
        return decompressSvg(imagem.mascara);
    }, [imagem.mascara]);

    function downloadSvg() {
        const svgBlob = new Blob([svgImage], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(svgBlob);

        const img = document.createElement('img');
        img.src = url;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');

            if (!ctx) {
                console.error('Não foi possível criar o contexto do canvas')
                return;
            }

            ctx.drawImage(img, 0, 0);

            const pngUrl = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.href = pngUrl;

            const urlParts = imagem.tiff.split('/');
            const identifier = urlParts[urlParts.length - 1].split('.')[0];
            link.download = `mascara-${identifier}.png`;
            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    }

    return (
        <>
            <div className="relative w-full min-h-72 h-fit p-4 bg-neutral-700 border border-neutral-600 rounded-lg flex flex-col items-center">
                <div className="relative w-full h-72 z-0">
                    <Image
                        src={imagem.thumbnail}
                        className="w-full h-full object-contain"
                        width={300}
                        height={300}
                        alt="Máscara"
                    />
                    <SvgImage
                        compressedImage={imagem.mascara}
                        className={`absolute top-0 left-0 w-full h-full object-contain ${isMaskVisible ? 'opacity-100' : 'opacity-0'}`}
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
                downloadSvg={downloadSvg}
            />
        </>
    );
};

export { ImageCard };