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
    <div className="w-full flex bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
      <div className="w-[224px] h-full bg-[#F3F1FC] max-sm:hidden">
        <Sidebar />
      </div>
      <div className="container">
        <Header />
        <div className="flex space-x-8">
          <div className="space-y-10">
            <Studying />
            <MyCourses />
            <FamousCourses />
          </div>
          <div className="">
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
