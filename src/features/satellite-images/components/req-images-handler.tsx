'use client';

import { useState } from "react";
import { ReqImagesForm, ReqImagesFormValues } from "./req-images-form";
import { reqImages } from "../api/req-images";
import { ImageGrid } from "./image-grid";
import { SatelliteImage } from "@/types/types";
import Link from "next/link";
import { paths } from "@/routes/paths";
import { LoadingCard } from "@/components/ui/loading";
import { useNotifications } from "@/components/ui/notifications";

const ReqImageHandler = () => {

    const [images, setImages] = useState<SatelliteImage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const { addNotification } = useNotifications();

    async function handleSubmit(data: ReqImagesFormValues) {
        setIsLoading(true);

        await reqImages(data)
            .then((response) => {
                // console.log(response.data);
                setImages(response.data.imagens);
            })
            .catch((e) => {
                addNotification({
                    type: 'error',
                    title: 'Erro ao buscar imagens',
                    message: e.response?.data?.erro || ''
                })
                console.log(e);
            })
            .finally(() => {
                setIsLoading(false);
                setHasSearched(true);
            });
    }

    return (
        <>
            <div className="py-10 flex flex-col gap-3">
                <h1 className="text-neutral-100 text-mheading2 font-bold leading-10 lg:text-heading3">
                    Busca por imagens de
                    <span className="text-primary-500"> satélite</span>
                </h1>
                <p className="text-base text-neutral-300 lg:text-large">Selecione um intervalo de datas e uma área de interesse para visualizar imagens de satélite e identificar a cobertura de nuvens.</p>
            </div>
            <div className="flex flex-col gap-20">
                <ReqImagesForm onSubmit={handleSubmit} />
                {isLoading ? (
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
                ) : (
                    <ImageGrid imagens={images} hasSearched={hasSearched} />
                )}
            </div>
        </>
    )
}

export { ReqImageHandler };