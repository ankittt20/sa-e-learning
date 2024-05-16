import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="w-full bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
        <Navbar />
        <div className="container mt-24">{children}</div>
      </div>
    </>
  );
};

export default layout;
