import React, { useState, useEffect } from 'react';

interface ImagemData {
  imagens: string[][];
  pagina: number;
  tamanhoPagina: number;
  quantidadePagina: number;
}

const ImageGallery: React.FC = () => {
  const [bbox] = useState("c1,c2,c3,c4"); // Valores do bbox, pode ser dinâmico
  const [datetime] = useState("2024-01-01/2024-01-10"); // Valores do datetime, pode ser dinâmico
  const [imagens, setImagens] = useState<string[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar as imagens do backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/imagens?bbox=${bbox}&datetime=${datetime}`
        );
        const data: ImagemData = await response.json();
        setImagens(data.imagens);
      } catch (error) {
        setError("Erro ao buscar imagens");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [bbox, datetime]);

  if (loading) {
    return <p>Carregando imagens...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Galeria de Imagens</h1>
      <div className="grid grid-cols-3 gap-4">
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

export default ImageGallery;
