import React from "react";

const UserMap = () => {
  return (
    <div className="flex-center mb-[-12px] ml-6 flex-wrap gap-4 py-3 max-sm:items-start">
      <div className="flex-center gap-2">
        <div className="relative size-[18px] rounded bg-[#8181FF]"></div>
        <span className="text-xs font-semibold">Students</span>
      </div>
      <div className="flex-center gap-2">
        <div className="size-[18px] rounded bg-accent-pink"></div>
        <span className="text-xs font-semibold">Teachers</span>
      </div>
      <div className="flex-center gap-2">
        <div className="size-[18px] rounded bg-[#FFAC0A]"></div>
        <span className="text-xs font-semibold">Admin</span>
      </div>
    </div>
  );
};

export default UserMap;
