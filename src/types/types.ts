export type BaseEntity = {
    id?: number | string;
    id_requisicao?: string;
}

export type SatelliteImage = {
    thumbnail: string;
    tiff: string;
    data: string;
    bbox: number[];
    mascara: string;
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
    data_requisicao: number;
    bbox_requisicao: number[];
    status_requisicao: boolean;
    tempo_inicio_requisicao: number;
    tempo_final_requisicao: number;
    imagens: SatelliteImage[];
}

export type ImagesRequestList = {
    id_requisicao: string;
    data_requisicao: string;
    status_requisicao: boolean;
}