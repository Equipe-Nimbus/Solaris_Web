'use client';

import { Button } from "@/components/ui/button";
import { RequestsTable } from "./req-list-table";
import Link from "next/link";
import { paths } from "@/routes/paths";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { ImagesRequestList } from "@/types/types";
import { getRequests } from "../api/req-images";
import { useNotifications } from "@/components/ui/notifications";

const ReqListView = () => {
    const [requests, setRequests] = useState<ImagesRequestList[]>([]);
    const { addNotification } = useNotifications();

    useEffect(() => {
        getRequests()
            .then((response) => {
                setRequests(response);
            })
            .catch((error) => {
                addNotification({
                    title: 'Erro ao carregar requisições',
                    message: 'Não foi possível carregar as requisições anteriores.',
                    type: 'error'
                })
                console.log(error);
            });
    }, [addNotification]);

    return (
        <div className="flex flex-col gap-4 justify-center">
            <div className="flex justify-between items-center py-4 mt-10">
                <h1 className="text-neutral-300 font-semibold">Consultas anteriores</h1>
                <Link href={paths.requests.new}>
                    <Button
                        variant="primary"
                        className="w-fit flex gap-2 items-center"
                    >
                        <Plus className="size-4" />
                        Adicionar
                    </Button>
                </Link>
            </div>
            <RequestsTable requests={requests} />
        </div>
    )
}

export { ReqListView };