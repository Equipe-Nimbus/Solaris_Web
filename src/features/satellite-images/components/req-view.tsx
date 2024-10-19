import { useEffect, useState } from "react";

import { ImagesRequest } from "@/types/types";
import { REQUEST_MOCK } from "@/mocks/mocks";
import { Map } from "./map";
import { LoadingCard } from "@/components/ui/loading";
import { paths } from "@/routes/paths";
import Link from "next/link";
import { ImageGrid } from "./image-grid";
import { fDate } from "@/utils/fDate";

type RequestViewProps = {
    requestId: string | number;
}

const RequestView = ({ requestId }: RequestViewProps) => {
    const [request] = useState<ImagesRequest>(REQUEST_MOCK);

    const bounds = {
        west: request.bbox_requisicao[0],
        south: request.bbox_requisicao[1],
        east: request.bbox_requisicao[2],
        north: request.bbox_requisicao[3]
    };


    useEffect(() => {
        // utilizar a função getRequestById para buscar a requisição pelo id
    }, [requestId])

    return (
        <div className="flex flex-col">
            <span>{fDate(request.data_requisicao)}</span>
            <span>{fDate(request.tempo_inicio_requisicao)}</span>
            <span>{fDate(request.tempo_inicio_requisicao)}</span>
            <Map bounds={bounds} />
            {request.status_requisicao ? (
                <ImageGrid imagens={request.imagens} hasSearched={true} />
            ) : (
                <LoadingCard
                    title="Processando suas imagens..."
                >
                    <span className="max-w-[400px] text-center text-neutral-400">
                        Isso pode levar algum tempo. Você pode retornar a qualquer momento e verificar o status da sua requisição nas suas{' '}
                        <Link href={paths.requests.list} className="text-primary-500">
                            requisições anteriores.
                        </Link>
                    </span>
                </LoadingCard>
            )}
        </div>
    )
}

export { RequestView }