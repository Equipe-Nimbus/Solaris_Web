import { Button } from "@/components/ui/button";
import { SvgImage } from "@/components/ui/svgImage";
import { SatelliteImage } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

interface ImagemResponse {
  imagens: SatelliteImage[];
  hasSearched?: boolean;
}

const ImageGrid = ({ imagens, hasSearched }: ImagemResponse) => {
  const [isMaskVisible, setMaskVisible] = useState<boolean[]>(new Array(imagens.length).fill(false));

  function toggleMaskVisibility(index: number) {
    setMaskVisible(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  if (hasSearched && imagens.length === 0) return (
    <div className="flex justify-center items-center h-64">
      <p className="text-lg text-neutral-100">Nenhuma imagem encontrada.</p>
    </div>
  )

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {imagens.map((imagem, index) => (
          <div key={index} className="relative w-full min-h-72 h-fit p-4 bg-neutral-700 border border-neutral-600 rounded-lg flex flex-col items-center">
            <div className="relative w-full h-72">
              <Image
                src={imagem.imagemOriginal}
                className="w-full h-full object-contain"
                width={300}
                height={300}
                alt="Máscara"
              />
              <SvgImage
                compressedImage={imagem.imagemProcessada}
                className={`absolute top-0 left-0 w-full h-full object-contain ${isMaskVisible[index] ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            <div className="mt-4">
              <Button variant="ghost" onClick={() => { toggleMaskVisibility(index) }} className={`${isMaskVisible[index] ? 'bg-primary-100/15' : ''}`}>
                Alternar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ImageGrid };
