import React from "react";
import SideNavMenu from "../cards/SideNavMenu";
import { MdDashboard } from "react-icons/md";
import { CiCalendar, CiSettings, CiLogin } from "react-icons/ci";
import { FaBook } from "react-icons/fa6";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { Button } from "@/components/ui/button";

const SideNav = () => {
  return (
    <div>
      <div className="relative w-56 bg-[#F3F1FC] p-5 pt-14 sm:h-[600px]">
        <h2 className="h3-bold">SAelearning</h2>
        <div className="flex-center mt-28 flex-col gap-5">
          <SideNavMenu
            text="Dashboard"
            icon={<MdDashboard size={18} />}
            isActive
          />
          <SideNavMenu
            text="Calendar"
            icon={<CiCalendar size={18} color="#888888" />}
          />
          <SideNavMenu
            text="Courses"
            icon={<FaBook size={18} color="#888888" />}
          />
          <SideNavMenu
            text="Messages"
            icon={<BiMessageRoundedAdd size={18} color="#888888" />}
          />
          <SideNavMenu
            text="Settings"
            icon={<CiSettings size={18} color="#888888" />}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 mb-12 w-full">
          <Button className="flex-center mx-auto gap-4 bg-primary-100">
            <CiLogin size={24} color="#888888" />
            <span className="text-sm text-[#888888]">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
