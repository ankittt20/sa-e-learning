import AdminNav from "@/components/shared/navbar/AdminNav";
import Categories from "@/components/shared/admin/Categories";
import Feedback from "@/components/shared/admin/Feedback";
import Header from "@/components/shared/admin/Header";
import Sidebar from "@/components/shared/navbar/Sidebar";
import Stats from "@/components/shared/admin/Stats";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);

  if (session?.user?.role !== "admin") {
    redirect("/login");
  }

  return (
    <div className="sm:flex w-full bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
      <AdminNav user={session?.user} />
      <div className="h-full w-[224px] bg-[#F3F1FC] max-sm:hidden">
        <Sidebar />
      </div>
      <div className="container">
        <Header user={session?.user} title="Admin" />
        <h3 className="font-bold text-2xl sm:hidden pb-8">Admin</h3>
        <div className="sm:flex sm:space-x-5">
          <div className="flex flex-col-reverse space-x-8 sm:flex-row">
            <Stats />
          </div>
          <div className="grow flex-col space-y-8 max-sm:py-8">
            <Categories />
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
