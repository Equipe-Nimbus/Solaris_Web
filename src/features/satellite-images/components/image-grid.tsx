import { SvgImage } from "@/components/ui/svgImage";

interface ImagemResponse {
  imagens: string[];
  pagina?: number;
  tamanhoPagina?: number;
  quantidadePagina?: number;
}

const ImageGrid = ({ imagens }: ImagemResponse) => {

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {imagens.map((image, index) => (
          <div key={index} className="relative w-full h-72 p-4 bg-neutral-700 border border-neutral-600 rounded-lg">
            <SvgImage
              compressedImage={image}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ImageGrid };
