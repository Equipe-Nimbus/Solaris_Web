import { AxiosResponse } from "axios";
import { ReqImagesFormValues } from "../components/req-images-form";
import { api, endpoints } from "@/lib/api-client";
import { fDateToServer } from "@/utils/fDate";
import { ImagesRequest, ImagesRequestList, SatelliteImage } from "@/types/types";
import { auth } from "@/lib/auth";

export async function reqImages(formValues: ReqImagesFormValues): Promise<AxiosResponse<{ imagens: SatelliteImage[]}>> {
    try {
        const { startDate, endDate, bbox } = formValues;
        const fStartDate = fDateToServer(startDate);
        const fEndDate = fDateToServer(endDate);
        const { id } = auth.getUser();
    
        const response = await api.get<{ imagens: SatelliteImage[]}>(endpoints.images.req, {
            params: {
                datetime: `${fStartDate}/${fEndDate}`,
                bbox: bbox,
                id: id
            }
        })
        
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getRequests(): Promise<ImagesRequestList[]> {
    try {
        const { id: userId } = auth.getUser();
        const res = await api.get<ImagesRequestList[]>(endpoints.requests.list, {
            params: {
                id_user: userId
            }
        });

        return res.data || [];
    } catch (error) {
        throw error;
    }
}

export async function getRequestById(id: string | number): Promise<ImagesRequest> {
    try {
        const res = await api.get<ImagesRequest>(endpoints.requests.listOne, {
            params: {
                id_requisicao: id
            }
        });

        return res.data;
    } catch (error) {
        throw error;
    }
}