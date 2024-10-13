import { SatelliteImage } from "@/types/types";
import { ImageCard } from "./image-card";

interface ImagemResponse {
  imagens: SatelliteImage[];
  hasSearched?: boolean;
}

const ImageGrid = ({ imagens = [], hasSearched }: ImagemResponse) => {
  
  if (hasSearched && imagens.length === 0) return (
    <div className="flex justify-center items-center h-64">
      <p className="text-lg text-neutral-100">Nenhuma imagem encontrada.</p>
    </div>
  )

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {imagens.map((imagem, index) => (
          <ImageCard
            key={index}
            imagem={imagem}
          />
        ))}
      </div>
    </div>
  );
};

export { ImageGrid };
