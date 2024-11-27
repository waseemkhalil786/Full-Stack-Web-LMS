import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="">
      <Tabs defaultValue="dashboard" className="flex bg-gray-100">
        <TabsList className="flex flex-col h-screen w-60 bottom-0 py-10 bg-gradient-to-b from-indigo-700 to-purple-600 text-white   justify-start gap-10">
        <h1 className="text-4xl text-white min-w-full text-center  font-bold rounded-md" >Developer</h1>
        <Link href={"/admin/dashboard"}>
                <div className="flex items-center gap-4 text-lg font-medium hover:bg-purple-700 p-3 rounded-md transition-all cursor-pointer">
                  📊 Dashboard
                </div>
              </Link>
              <Link href={"/admin/courses"}>
                <div className="flex items-center gap-4 text-lg font-medium hover:bg-purple-700 p-3 rounded-md transition-all cursor-pointer">
                  📚 Courses
                </div>
              </Link>
              <Link href={"/admin/batches"}>
                <div className="flex items-center gap-4 text-lg font-medium hover:bg-purple-700 p-3 rounded-md transition-all cursor-pointer">
                  🗂️ Batches
                </div>
              </Link>
              <Link href={"/admin/trainers"}>
                <div className="flex items-center gap-4 text-lg text-white font-medium hover:bg-purple-700 p-3 rounded-md transition-all cursor-pointer">
                  👩‍🏫 Trainers
                </div>
              </Link>
              <Link href={"/admin/students"}>
                <div className="flex items-center gap-4 text-lg font-medium hover:bg-purple-700 p-3 rounded-md transition-all cursor-pointer">
                  👨‍🎓 Students
                </div>
              </Link>
        </TabsList>
        <TabsContent value="dashboard">{children}</TabsContent>
        <TabsContent value="courses">{children}</TabsContent>
        <TabsContent value="batches">{children}</TabsContent>
        <TabsContent value="trainer">{children}</TabsContent>
        <TabsContent value="students">{children}</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
