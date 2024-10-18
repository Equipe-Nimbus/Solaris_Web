import { AxiosResponse } from "axios";
import { ReqImagesFormValues } from "../components/req-images-form";
import { api, endpoints } from "@/lib/api-client";
import { fDate } from "@/utils/fDate";
import { SatelliteImage } from "@/types/types";

export async function reqImages(formValues: ReqImagesFormValues): Promise<AxiosResponse<{ imagens: SatelliteImage[]}>> {
    try {
        const { startDate, endDate, bbox } = formValues;
        const fStartDate = fDate(startDate);
        const fEndDate = fDate(endDate);
    
        const response = await api.get<{ imagens: SatelliteImage[]}>(endpoints.images.req, {
            params: {
                datetime: `${fStartDate}/${fEndDate}`,
                bbox: bbox
            }
        })
        
        return response;
    } catch (error) {
        throw error;
    }

}