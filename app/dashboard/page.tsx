import FamousCourses from "@/components/shared/dashboard/FamousCourses";
import Header from "@/components/shared/dashboard/Header";
import MyCourses from "@/components/shared/dashboard/MyCourses";
import Profile from "@/components/shared/dashboard/Profile";
import Progress from "@/components/shared/dashboard/Progress";
import Scheduled from "@/components/shared/dashboard/Scheduled";
import Sidebar from "@/components/shared/dashboard/Sidebar";
import Studying from "@/components/shared/dashboard/Studying";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex w-full bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
      <div className="h-full w-[224px] bg-[#F3F1FC] max-sm:hidden">
        <Sidebar />
      </div>
      <div className="container">
        <Header showSearch heading="Dashboard" />
        <div className="flex flex-col-reverse space-x-8 sm:flex-row">
          <div className="space-y-10">
            <Studying />
            <MyCourses />
            <FamousCourses />
          </div>
          <div className="flex grow flex-col max-sm:items-center max-sm:justify-center">
            <Profile />
            <Progress />
            <Scheduled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
