import Categories from "@/components/shared/admin/Categories";
import Feedback from "@/components/shared/admin/Feedback";
import Header from "@/components/shared/admin/Header";
import Sidebar from "@/components/shared/admin/Sidebar";
import Stats from "@/components/shared/admin/Stats";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex w-full bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
      <div className="h-full w-[224px] bg-[#F3F1FC] max-sm:hidden">
        <Sidebar />
      </div>
      <div className="container">
        <Header />
        <div className="flex space-x-5">
          <div className="flex flex-col-reverse space-x-8 sm:flex-row">
            <Stats />
          </div>
          <div className="grow flex-col space-y-8 max-sm:items-center max-sm:justify-center">
            <Categories />
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
