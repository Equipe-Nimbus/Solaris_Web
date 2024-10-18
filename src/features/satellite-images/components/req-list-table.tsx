'use client';

import Table from "@/components/ui/table/table";
import { ImagesRequestList } from "@/types/types";
import { fDate } from "@/utils/fDate";
import { Circle, Eye } from "@phosphor-icons/react";

type RequestsTableProps = {
    requests: ImagesRequestList[];  
}

const RequestsTable = ({ requests }: RequestsTableProps) => {
    return (
        <Table 
            data={requests}
            columns={[
                {
                    title: "ID",
                    field: "id_requisicao"
                },
                {
                    title: "Data da requisição",
                    field: "data_requisicao",
                    Cell: ({ entry }) => (
                        <span>{fDate(entry.data_requisicao)}</span>
                    )
                },
                {
                    title: "Status",
                    field: "status_requisicao",
                    Cell: ({ entry }) => (
                        <div className="flex items-center gap-2">
                            {entry.status_requisicao ? (
                                <>
                                    <Circle weight="fill" className="size-3 text-success"/>
                                    <span className="font-semibold text-success">CONCLUÍDO</span>
                                </>
                            ) : (
                                <>
                                    <Circle weight="fill" className="size-3 text-primary-500"/>
                                    <span className="font-semibold text-primary-500">EM PROCESSAMENTO</span>   
                                </>
                            )}
                        </div>
                    )
                }, 
                {
                    title: "",
                    field: "id_requisicao",
                    Cell:({ entry }) => (
                        <Eye 
                            weight="fill" 
                            className="size-5 text-neutral-600 cursor-pointer hover:text-neutral-500 transition-colors"
                            onClick={() => console.log(entry.id_requisicao)}
                        />
                    )
                }
            ]}
        />
    )
}

export { RequestsTable };