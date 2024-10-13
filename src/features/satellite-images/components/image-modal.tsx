import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Modal, ModalContent } from "@/components/ui/modal";
import { SvgImage } from "@/components/ui/svgImage";
import { SatelliteImage } from "@/types/types";
import { DownloadSimple } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

type ImageModalProps = {
    cardOpen: boolean;
    setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
    imagem: SatelliteImage;
    isImageVisible: boolean;
    setImageVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isMaskVisible: boolean;
    setMaskVisible: React.Dispatch<React.SetStateAction<boolean>>;
    downloadSvg: () => void;
}

const ImageModal = ({ cardOpen, setCardOpen, imagem, isImageVisible, setImageVisible, isMaskVisible, setMaskVisible, downloadSvg }: ImageModalProps) => {
    return (
        <Modal isOpen={cardOpen} onClose={() => setCardOpen(false)}>
            <ModalContent>
                <div className="relative w-full h-96">
                    <Image
                        src={imagem.thumbnail}
                        className={`absolute top-0 left-0 w-full h-full object-contain ${isImageVisible ? 'opacity-100' : 'opacity-0'}`}
                        width={300}
                        height={300}
                        alt="Máscara"
                    />
                    <SvgImage
                        compressedImage={imagem.mascara}
                        className={`absolute top-0 left-0 w-full h-full object-contain ${isMaskVisible ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <hr className="border-1 border-neutral-600" />
                <div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-base text-neutral-300 font-medium">Camadas</h2>
                            <div className="flex gap-6">
                                <Checkbox checked={isImageVisible} onChange={() => setImageVisible(prev => !prev)} label="Original" />
                                <Checkbox checked={isMaskVisible} onChange={() => setMaskVisible(prev => !prev)} label="Nuvem" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-base text-neutral-300 font-medium">Downloads</h2>
                            <div className="flex gap-6">
                                <div className="flex gap-1 items-center">
                                    <Link href={imagem.tiff} target="_blank" download>
                                        <DownloadSimple
                                            size={32}
                                            className="text-neutral-400 p-1 hover:bg-neutral-400/30 rounded duration-200 cursor-pointer"
                                        />
                                    </Link>
                                    <span className="text-small font-semibold text-neutral-400">tiff</span>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <DownloadSimple
                                        size={32}
                                        className="text-neutral-400 p-1 hover:bg-neutral-400/30 rounded duration-200 cursor-pointer"
                                        onClick={downloadSvg}
                                    />
                                    <span className="text-small font-semibold text-neutral-400">máscara</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalContent>
        </Modal>
    );
};

export { ImageModal };