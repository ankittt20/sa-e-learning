import Sidebar from "@/components/shared/navbar/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main></main>
    </div>
  );
};

export default page;
