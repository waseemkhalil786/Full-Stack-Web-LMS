import { BatchModal } from "@/components/DataTables/BatchTable";


export default function Batches() {
    return(
        <div className="min-h-screen p-10 w-fit">
            <h1 className="text-4xl font-bold text-center">
                Batches
            </h1>
            <BatchModal/>
        </div>
    )
}