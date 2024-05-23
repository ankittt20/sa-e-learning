import FamousCourses from "@/components/shared/dashboard/FamousCourses";
import Header from "@/components/shared/dashboard/Header";
import MyCourses from "@/components/shared/dashboard/MyCourses";
import Profile from "@/components/shared/dashboard/Profile";
import Progress from "@/components/shared/dashboard/Progress";
import Scheduled from "@/components/shared/dashboard/Scheduled";
import Sidebar from "@/components/shared/dashboard/Sidebar";
import Studying from "@/components/shared/dashboard/Studying";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex w-full bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
      <div className="h-full w-[224px] bg-[#F3F1FC] max-sm:hidden">
        <Sidebar />
      </div>
      <div className="container">
        <Header session={session.user} showSearch heading="Dashboard" />
        <div className="flex flex-col-reverse space-x-8 sm:flex-row">
          <div className="space-y-10">
            <Studying userId={session?.user?.id} />
            <MyCourses />
            <FamousCourses />
          </div>
          <div className="flex grow flex-col max-sm:items-center max-sm:justify-center">
            <Profile user={session?.user} />
            <Progress />
            <Scheduled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
