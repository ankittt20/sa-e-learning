import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F3F1FC] px-8 py-16 text-center">
      <h1 className="mb-20 text-3xl font-bold">SAelearning</h1>
      <div className="flex-center flex flex-col space-y-5">
        <Button className="h-12 w-40 space-x-3 rounded-lg bg-accent-blue">
          <Image
            src="/assets/icons/dashboard-icon.svg"
            alt="Dashboard"
            width={20}
            height={20}
          />
          <p className="text-primary-100">Dashboard</p>
        </Button>
        <Button className="h-12 w-40 space-x-3 rounded-lg bg-primary-100">
          <Image
            src="/assets/icons/calendar-icon.svg"
            alt="Calendar"
            width={20}
            height={20}
          />
          <p className="text-[#888888]">Calender</p>
        </Button>
        <Button className="h-12 w-40 space-x-3 rounded-lg bg-primary-100">
          <Image
            src="/assets/icons/courses-icon.svg"
            alt="Courses"
            width={20}
            height={20}
          />
          <p className="text-[#888888]">Courses</p>
        </Button>
        <Button className="h-12 w-40 space-x-3 rounded-lg bg-primary-100">
          <Image
            src="/assets/icons/messages-icon.svg"
            alt="Messages"
            width={20}
            height={20}
          />
          <p className="text-[#888888]">Messages</p>
        </Button>
        <Button className="h-12 w-40 space-x-3 rounded-lg bg-primary-100">
          <Image
            src="/assets/icons/settings-icon.svg"
            alt="Settings"
            width={20}
            height={20}
          />
          <p className="text-[#888888]">Settings</p>
        </Button>
      </div>
      <div className="mt-96 space-y-10">
        <Button className="h-12 w-40 space-x-3 rounded-lg bg-primary-100">
          <Image
            src="/assets/icons/logout-icon.svg"
            alt="Logout"
            width={20}
            height={20}
          />
          <p className="text-[#888888]">Logout</p>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
