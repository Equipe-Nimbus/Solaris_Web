import React, { useEffect, useState } from 'react';

interface ImagemResponse {
  imagens: string[][];
  pagina: number;
  tamanhoPagina: number;
  quantidadePagina: number;
}

const GaleriaJson = () => {
  const [imagens, setImagens] = useState<string[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const bbox = "c1,c2,c3,c4";
  const datetime = "2024-01-01/2024-01-31";

  const fetchImagens = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://data.inpe.br/bdc/stac/v1/search?collections=CB4A-WPM-PCA-FUSED-1&bbox=${bbox}&datetime=${datetime}`
      );
      
      if (!response.ok) {
        throw new Error("Erro ao buscar as imagens");
      }

      const data: ImagemResponse = await response.json();
      setImagens(data.imagens);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImagens();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Galeria de Imagens</h1>

      {loading && <p>Carregando imagens...</p>}
      {error && <p className="text-red-500">Erro: {error}</p>}

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
