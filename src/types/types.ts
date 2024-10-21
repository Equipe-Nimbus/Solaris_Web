export type BaseEntity = {
    id?: number | string;
    id_requisicao?: string;
}

export type SatelliteImage = {
    link_thumbnail: string;
    link_tiff: string;
    bbox_imagem: number[];
    mascara_imagem: string;
    link_preview_mascara: string;
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