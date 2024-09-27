import React, { useEffect, useState } from 'react';

interface ImagemResponse {
  imagens: string[][];
  pagina: number;
  tamanhoPagina: number;
  quantidadePagina: number;
}

const GaleriaJson = ({imagens}: ImagemResponse) => {

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Galeria de Imagens</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {imagens.map((imageArray, index) => (
          <div key={index} className="relative">
            {imageArray.length > 0 && (
              <img
                src={imageArray[0]}
                alt={`Imagem ${index + 1}`}
                className="w-full h-auto object-cover rounded shadow-lg"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriaJson;
