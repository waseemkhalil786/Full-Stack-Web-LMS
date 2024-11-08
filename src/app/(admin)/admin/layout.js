import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Tabs defaultValue="dashboard" className="flex">
        <TabsList className="flex flex-col h-screen w-48 py-10  justify-start gap-5">
        <h1 className="text-3xl text-black">Menue Bar</h1>
          <Link href={"/admin/dashboard"}>
            {" "}
            <TabsTrigger value="dashboard" className=" text-xl">Dashboard</TabsTrigger>
          </Link>
          <Link href={"/admin/courses"}>
            {" "}
            <TabsTrigger value="courses"  className=" text-xl">Courses</TabsTrigger>
          </Link>
          <Link href={"/admin/batches"}>
            {" "}
            <TabsTrigger value="batches"  className=" text-xl">Batches</TabsTrigger>
          </Link>
          <Link href={"/admin/trainers"}>
            {" "}
            <TabsTrigger value="trainer"  className=" text-xl">Trainers</TabsTrigger>
          </Link>
          <Link href={"/admin/students"}>
            {" "}
            <TabsTrigger value="students" className=" text-xl">Students</TabsTrigger>
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
