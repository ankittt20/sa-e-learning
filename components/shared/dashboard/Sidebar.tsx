import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="flex flex-col px-8 py-16 items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-20">
        <a href="/">SAelearning</a>
      </h1>
      <div className="space-y-5">
        <Button className="space-x-3 bg-accent-blue rounded-lg w-40 h-12">
          <Image
            src="/assets/icons/dashboard-icon.svg"
            alt="Dashboard"
            width={20}
            height={20}
          />
          <p className="text-primary-100">Dashboard</p>
        </Button>
        <Button className="space-x-3 bg-primary-100 rounded-lg w-40 h-12">
          <Image
            src="/assets/icons/calendar-icon.svg"
            alt="Calendar"
            width={20}
            height={20}
          />
          <p className="text-[#888888]">Calender</p>
        </Button>
        <Button className="space-x-3 bg-primary-100 rounded-lg w-40 h-12">
          <Image
            src="/assets/icons/courses-icon.svg"
            alt="Courses"
            width={20}
            height={20}
          />
          <p className="text-[#888888]">Courses</p>
        </Button>
        <Button className="space-x-3 bg-primary-100 rounded-lg w-40 h-12">
          <Image
            src="/assets/icons/messages-icon.svg"
            alt="Messages"
            width={20}
            height={20}
          />
          <p className="text-[#888888]">Messages</p>
        </Button>
        <Button className="space-x-3 bg-primary-100 rounded-lg w-40 h-12">
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
        <Image
          src="/assets/icons/promo.svg"
          alt="Promo"
          width={160}
          height={160}
        />
        <Button className="space-x-3 bg-primary-100 rounded-lg w-40 h-12">
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
