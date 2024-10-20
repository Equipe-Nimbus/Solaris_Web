import { ImagesRequestList, SatelliteImage } from "@/types/types";

export const REQUESTS_MOCK: ImagesRequestList[] = [
    {
        id_requisicao: "req1",
        data_requisicao: "2021-10-01T00:00:00Z",
        status_requisicao: true
    },
    {
        id_requisicao: "req2",
        data_requisicao: "2021-10-02T00:00:00Z",
        status_requisicao: false
    },
    {
        id_requisicao: "req3",
        data_requisicao: "2021-10-03T00:00:00Z",
        status_requisicao: true
    },
    {
        id_requisicao: "req4",
        data_requisicao: "2021-10-04T00:00:00Z",
        status_requisicao: false
    },
    {
        id_requisicao: "req5",
        data_requisicao: "2021-10-05T00:00:00Z",
        status_requisicao: true
    },
    {
        id_requisicao: "req6",
        data_requisicao: "2021-10-06T00:00:00Z",
        status_requisicao: false
    },
    {
        id_requisicao: "req7",
        data_requisicao: "2021-10-07T00:00:00Z",
        status_requisicao: true
    },
    {
        id_requisicao: "req8",
        data_requisicao: "2021-10-08T00:00:00Z",
        status_requisicao: false
    },
    {
        id_requisicao: "req9",
        data_requisicao: "2021-10-09T00:00:00Z",
        status_requisicao: true
    },
    {
        id_requisicao: "req10",
        data_requisicao: "2021-10-10T00:00:00Z",
        status_requisicao: false
    }
];

export const REQUEST_MOCK = {
    id_requisicao: "mVnKb4lueHmcIA8O53Lg",
    data_requisicao: "2024-10-20T00:00:00Z",
    bbox_requisicao: [-50.449219, -20.303418, -43.242188, -15.114553],
    status_requisicao: false,
    tempo_inicio_requisicao: "2024-09-01T00:00:00Z",
    tempo_final_requisicao: "2024-09-30T00:00:00Z",
    imagens: []
}

export const IMAGES_MOCK: SatelliteImage[] = [
    {
        link_thumbnail: "https://data.inpe.br/bdc/data/CB4A-WPM-PCA-FUSED/v001/197/123/2024/9/CBERS4A_WPM_PCA_RGB321_20240924_197_123.png",
        link_tiff: "https://data.inpe.br/bdc/data/CB4A-WPM-PCA-FUSED/v001/197/123/2024/9/CBERS4A_WPM_PCA_RGB321_20240924_197_123.tif",
        bbox_imagem: [-50.449219, -20.303418, -43.242188, -15.114553],
        mascara_imagem:     "http://localhost:8080/download/CBERS4A_WPM_PCA_RGB321_20240924_197_123_OUT.svg",
        link_preview_mascara: "http://localhost:8080/view/CBERS4A_WPM_PCA_RGB321_20240924_197_123_OUT.png"
    },
    {
        link_thumbnail: "https://data.inpe.br/bdc/data/CB4A-WPM-PCA-FUSED/v001/197/123/2024/9/CBERS4A_WPM_PCA_RGB321_20240924_197_123.png",
        link_tiff: "https://data.inpe.br/bdc/data/CB4A-WPM-PCA-FUSED/v001/197/123/2024/9/CBERS4A_WPM_PCA_RGB321_20240924_197_123.tif",
        bbox_imagem: [-50.449219, -20.303418, -43.242188, -15.114553],
        mascara_imagem: "http://localhost:8080/view/CBERS4A_WPM_PCA_RGB321_20240924_197_123_OUT.png",
        link_preview_mascara: "http://localhost:8080/download/CBERS4A_WPM_PCA_RGB321_20240924_197_123_OUT.svg"
    },
    {
        link_thumbnail: "https://data.inpe.br/bdc/data/CB4A-WPM-PCA-FUSED/v001/197/123/2024/9/CBERS4A_WPM_PCA_RGB321_20240924_197_123.png",
        link_tiff: "https://data.inpe.br/bdc/data/CB4A-WPM-PCA-FUSED/v001/197/123/2024/9/CBERS4A_WPM_PCA_RGB321_20240924_197_123.tif",
        bbox_imagem: [-50.449219, -20.303418, -43.242188, -15.114553],
        mascara_imagem: "http://localhost:8080/view/CBERS4A_WPM_PCA_RGB321_20240924_197_123_OUT.png",
        link_preview_mascara: "http://localhost:8080/download/CBERS4A_WPM_PCA_RGB321_20240924_197_123_OUT.svg"
    },
    {
        link_thumbnail: "https://data.inpe.br/bdc/data/CB4A-WPM-PCA-FUSED/v001/197/123/2024/9/CBERS4A_WPM_PCA_RGB321_20240924_197_123.png",
        link_tiff: "https://data.inpe.br/bdc/data/CB4A-WPM-PCA-FUSED/v001/197/123/2024/9/CBERS4A_WPM_PCA_RGB321_20240924_197_123.tif",
        bbox_imagem: [-50.449219, -20.303418, -43.242188, -15.114553],
        mascara_imagem: "http://localhost:8080/view/CBERS4A_WPM_PCA_RGB321_20240924_197_123_OUT.png",
        link_preview_mascara: "http://localhost:8080/download/CBERS4A_WPM_PCA_RGB321_20240924_197_123_OUT.svg"
    },
    {
        link_thumbnail: "https://data.inpe.br/bdc/data/CB4A-WPM-PCA-FUSED/v001/197/123/2024/9/CBERS4A_WPM_PCA_RGB321_20240924_197_123.png",
        link_tiff: "https://data.inpe.br/bdc/data/CB4A-WPM-PCA-FUSED/v001/197/123/2024/9/CBERS4A_WPM_PCA_RGB321_20240924_197_123.tif",
        bbox_imagem: [-50.449219, -20.303418, -43.242188, -15.114553],
        mascara_imagem: "http://localhost:8080/view/CBERS4A_WPM_PCA_RGB321_20240924_197_123_OUT.png",
        link_preview_mascara: "http://localhost:8080/download/CBERS4A_WPM_PCA_RGB321_20240924_197_123_OUT.svg"
    }
];