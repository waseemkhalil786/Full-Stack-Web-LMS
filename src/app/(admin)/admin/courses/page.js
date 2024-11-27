import { CourseTable } from "@/components/DataTables/CourseTable";
import { CourseDialog } from "@/components/Dialogs/CourseModal";
import { Button } from "@/components/ui/button";

export default function Courses() {
  return (
    <div className="min-h-screen p-10 flex flex-col w-">
      <div className="flex justify-between my-2">
        <h1 className="text-4xl font-bold text-indigo-600">Courses</h1>
        <CourseDialog/>
      </div>

      <CourseTable />
    </div>
  );
}
