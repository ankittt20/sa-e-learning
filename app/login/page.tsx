import Login from "@/components/shared/login/Login";
import MobileNav from "@/components/shared/navbar/MobileNav";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="container flex justify-between p-7 sm:hidden">
        <h3 className="text-xl font-bold">SAelearning</h3>
        <MobileNav />
      </div>
      <Login />
    </>
  );
};

export default page;
