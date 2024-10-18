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