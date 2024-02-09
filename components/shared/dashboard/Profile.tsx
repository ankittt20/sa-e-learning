import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import DashboardInfo from "./DashboardInfo";

type Props = {};

const Profile = (props: Props) => {
  return (
    <>
      <Card className="relative w-[317px] rounded-xl border-0 bg-primary-100 p-0">
        <CardHeader className="p-0">
          <Image
            src="/assets/images/profile.png"
            alt="profile"
            width={317}
            height={130}
          />
          <Image
            src="/assets/images/user.png"
            alt="user"
            width={69.08}
            height={69.08}
            className="absolute left-1/2 top-[95px] -translate-x-1/2 rounded-full"
          />
        </CardHeader>
        <div className="mt-12 flex flex-col items-center justify-center">
          <CardTitle className="text-center text-[15px] font-semibold text-[#202226]">
            Leslie Alexander
          </CardTitle>
          <CardDescription className="text-center text-xs text-[#838383]">
            Leslie Alexander
          </CardDescription>
        </div>
        <CardContent className="mt-4 flex items-center justify-center gap-3">
          <DashboardInfo
            heading="Lessons"
            number={24}
            bg1="bg-[#E1F8E1]"
            bg2="bg-[#BAF8BA]"
          />
          <DashboardInfo
            heading="Medals"
            number={36}
            bg1="bg-[#FFF3E4]"
            bg2="bg-[#FFE3BF]"
          />
          <DashboardInfo
            heading="Exams"
            number={12}
            bg1="bg-[#FEF2F1]"
            bg2="bg-[#FEC3BE]"
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Profile;
