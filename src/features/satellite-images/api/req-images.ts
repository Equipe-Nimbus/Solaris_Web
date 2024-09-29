import { AxiosResponse } from "axios";
import { ReqImagesFormValues } from "../components/req-images-form";
import { api } from "@/lib/api-client";
import { fDate } from "@/utils/fDate";

export async function reqImages(formValues: ReqImagesFormValues): Promise<AxiosResponse<string[]>> {
    try {
        const { startDate, endDate, bbox } = formValues;
        const fStartDate = fDate(startDate);
        const fEndDate = fDate(endDate);
    
        const response = await api.get('/imagens', {
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