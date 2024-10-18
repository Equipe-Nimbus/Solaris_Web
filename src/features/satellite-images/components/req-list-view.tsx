import { Button } from "@/components/ui/button";
import { RequestsTable } from "./req-list-table";
import { REQUESTS_MOCK } from "@/mocks/mocks";
import Link from "next/link";
import { paths } from "@/routes/paths";
import { Plus } from "@phosphor-icons/react/dist/ssr";

const ReqListView = () => {
    return (
        <div className="flex flex-col gap-4 justify-center">
            <div className="flex justify-between items-center py-4 mt-10">
                <h1 className="text-neutral-300 font-semibold">Requisições anteriores</h1>
                <Link href={paths.requests.new}>
                    <Button
                        variant="primary"
                        className="w-fit flex gap-2 items-center"
                    >
                        <Plus className="size-4"/>
                        Adicionar
                    </Button>
                </Link>
            </div>
            <RequestsTable requests={REQUESTS_MOCK} />
        </div>
    )
}

export { ReqListView };