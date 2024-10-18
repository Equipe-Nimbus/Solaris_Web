import { RequestsTable } from "./req-list-table";
import { REQUESTS_MOCK } from "@/mocks/mocks";

const ReqListView = () => {
    return (
        <div className="flex flex-col gap-4 justify-center">
            <h1 className="text-neutral-300 font-semibold">Requisições</h1>
            <RequestsTable requests={REQUESTS_MOCK}/>
        </div>
    )
}

export { ReqListView };