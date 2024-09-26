import React, { useState, useEffect } from 'react';

interface ImagemData {
  imagens: string[][];
  pagina: number;
  tamanhoPagina: number;
  quantidadePagina: number;
}

const ImagemGaleria: React.FC = () => {
  const [bbox] = useState("c1,c2,c3,c4"); 
  const [datetime] = useState("2024-01-01/2024-01-10");
  const [imagens, setImagens] = useState<string[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setImagens([
        ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <p>Carregando imagens...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Galeria de Imagens</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {imagens.length > 0 ? (
          imagens.map((imagemArray, index) => (
            <div key={index} className="border rounded shadow">
              {imagemArray.map((imagem, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imagem}
                  alt={`Imagem ${index}-${imgIndex}`}
                  className="w-full h-auto"
                />
              ))}
            </div>
          ))
        ) : (
          <p>Nenhuma imagem encontrada.</p>
        )}
      </div>
    </div>
  );
};

export default ImagemGaleria;
