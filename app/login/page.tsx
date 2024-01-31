import Login from "@/components/shared/login/Login";
import MobileNav from "@/components/shared/navbar/MobileNav";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="flex conatiner p-7 justify-between sm:hidden">
      <h3 className="text-xl font-bold">SAelearning</h3>
        <MobileNav />
      </div>
      <Login />
    </>
  );
};

export default page;
