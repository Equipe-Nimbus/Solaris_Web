'use client';

import { useEffect, useState } from "react";

import { ImagesRequest } from "@/types/types";
import { REQUEST_MOCK } from "@/mocks/mocks";
import { Map } from "./map";
import { LoadingCard } from "@/components/ui/loading";
import { paths } from "@/routes/paths";
import Link from "next/link";
import { ImageGrid } from "./image-grid";
import { fDate } from "@/utils/fDate";
import { Circle } from "@phosphor-icons/react";

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
        <>
            <div className="flex flex-col py-8">
                <div className="flex flex-col gap-2 py-6">
                    <span className="text-neutral-400 font-medium">Id da consulta</span>
                    <span className="text-neutral-300 text-xl font-semibold">{request.id_requisicao}</span>
                </div>
                <hr className="border-neutral-600/50" />
                <div className="py-12">
                    <span className="text-neutral-400 font-medium">sua requisição está</span>
                    <div className="flex items-center gap-2 mt-3">
                        {request.status_requisicao ? (
                            <>
                                <Circle weight="fill" className="size-5 text-success" />
                                <span className="font-semibold text-heading4 text-success">CONCLUÍDA</span>
                            </>
                        ) : (
                            <>
                                <Circle weight="fill" className="size-5 text-primary-500" />
                                <span className="font-semibold text-heading4 text-primary-500">EM PROCESSAMENTO</span>
                            </>
                        )}
                    </div>
                    <span className="text-neutral-400 font-medium block mt-6">Data da realização: {fDate(request.data_requisicao)}</span>
                </div>
                <hr className="border-neutral-600/50" />
                <div className="flex flex-col py-6">
                    <span className="text-neutral-300 font-semibold">Parâmetros</span>
                    <div className="flex flex-col gap-4 mt-5">
                        <div className="flex flex-col gap-2">
                            <span className="text-neutral-400 font-medium">Data inicial: <span className="text-neutral-300 font-medium">{fDate(request.tempo_inicio_requisicao)}</span></span>
                            <span className="text-neutral-400 font-medium">Data final: <span className="text-neutral-300 font-medium">{fDate(request.tempo_final_requisicao)}</span></span>
                        </div>
                        <div className="w-full xl:w-1/2">
                            <Map bounds={bounds} />
                        </div>
                    </div>
                </div>
            </div>
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
        </>
    )
}

export { RequestView }