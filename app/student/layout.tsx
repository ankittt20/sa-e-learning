import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="w-full bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default layout;
