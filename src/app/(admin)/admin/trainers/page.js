import { TrainerTable } from "@/components/DataTables/TrainerTable";


export default function Trainers() {
    return(
        <div className="min-h-screen p-10 w-fit">
            <h1 className="text-4xl font-bold text-center">
                Trainers
            </h1>
            <TrainerTable/>
        </div>
    )
}