import Image from "next/image";
import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox/checkbox";

import { Modal, ModalContent } from "@/components/ui/modal";

import { SatelliteImage } from "@/types/types";
import { DownloadSimple } from "@phosphor-icons/react";

type ImageModalProps = {
    cardOpen: boolean;
    setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
    imagem: SatelliteImage;
    isImageVisible: boolean;
    setImageVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isMaskVisible: boolean;
    setMaskVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageModal = ({ cardOpen, setCardOpen, imagem, isImageVisible, setImageVisible, isMaskVisible, setMaskVisible }: ImageModalProps) => {
    const getOpacityClass = () => {
        if (isMaskVisible && isImageVisible) {
            return 'opacity-70';
        } else if (isImageVisible) {
            return 'opacity-100';
        } else {
            return 'opacity-0';
        }
    };

    return (
        <Modal isOpen={cardOpen} onClose={() => setCardOpen(false)}>
            <ModalContent>
                <div className="relative w-full h-96">
                    <Image
                        src={imagem.thumbnail}
                        className={`w-full h-full object-contain ${getOpacityClass()}`}
                        width={300}
                        height={300}
                        alt="Imagem de satélite"
                    />
                    <Image
                        src={imagem.mascara}
                        className={`absolute top-0 left-0 w-full h-full object-contain ${isMaskVisible ? 'opacity-100' : 'opacity-0'}`}
                        width={300}
                        height={300}
                        alt="Máscara"
                    />
                </div>
                <hr className="border-1 border-neutral-600" />
                <div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-base text-neutral-300 font-medium">Camadas</h2>
                            <div className="flex gap-6">
                                <Checkbox checked={isImageVisible} onChange={() => setImageVisible(prev => !prev)} label="Original" />
                                <Checkbox checked={isMaskVisible} onChange={() => setMaskVisible(prev => !prev)} label="Nuvens e Sombras" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-base text-neutral-300 font-medium">Informações</h2>
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 text-small text-neutral-400">
                                    <span className="text-neutral-300">Data da captura:</span> {imagem.data_imagem_criacao || 'N/A'}
                                </span>
                                <span className="flex gap-1 text-small text-neutral-400">
                                    <span className="text-neutral-300">Área (bbox):</span> {imagem.bbox.toString() || 'N/A'}
                                </span>
                                <span className="flex gap-1 text-small text-neutral-400">
                                    <span className="text-neutral-300">Cobertura de nuvens:</span> {imagem.estatistica_nuvem || 'N/A'}
                                </span>
                                <span className="flex gap-1 text-small text-neutral-400">
                                    <span className="text-neutral-300">Cobertura de sombras de nuvem:</span> {imagem.estatistica_sombra || 'N/A'}
                                </span>
                                <span className="flex gap-1 text-small text-neutral-400">
                                    <span className="text-neutral-300">Fundo:</span> {imagem.estatistica_fundo || 'N/A'}
                                </span>
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
                                    <Link href={imagem.download_links} target="_blank" download>
                                        <DownloadSimple
                                            size={32}
                                            className="text-neutral-400 p-1 hover:bg-neutral-400/30 rounded duration-200 cursor-pointer"
                                        />
                                    </Link>
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