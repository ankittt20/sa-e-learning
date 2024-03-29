import MobileNav from "@/components/shared/navbar/MobileNav";
import Signup from "@/components/shared/signup/Signup";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="flex conatiner p-7 justify-between sm:hidden">
        <h3 className="text-xl font-bold">SAelearning</h3>
        <MobileNav />
      </div>
      <Signup />
    </>
  );
};

export default page;
