export type BaseEntity = {
    id?: number | string;
    id_requisicao?: string;
}

export type SatelliteImage = {
    thumbnail: string;
    tiff: string;
    bbox: number[];
    mascara: string;
    download_links: string;
    data_imagem_criacao: string;    
    estatistica_fundo: string;
    estatistica_nuvem: string;
    estatistica_sombra: string;
}

export type User = {
    id: number;
    nome_user: string;
}

export type AuthResponse = {
    id: number;
    nome_user: string;
    token: string;
}

export type ImagesRequest = {
    id_requisicao: string;
    data_requisicao: string;
    bbox_requisicao: number[];
    status_requisicao: boolean;
    tempo_inicio_requisicao: string;
    tempo_final_requisicao: string;
    imagens: SatelliteImage[];
}

export type ImagesRequestList = {
    id_requisicao: string;
    data_requisicao: string;
    status_requisicao: boolean;
}