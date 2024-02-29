import Image from "next/image";
import React from "react";
import CUD from "../actions/CUD";

const AdminCard = () => {
  return (
    <div className="flex-between mt-3 rounded-lg bg-primary-100 p-3 drop-shadow sm:w-[433px]">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/images/user.png"
          alt="user"
          width={50}
          height={50}
          className="rounded-md"
        />
        <div>
          <p className="text-sm font-medium text-[#292638]">Akshay Kumar</p>
          <p className="text-xs text-[#7C7A84]">Joined - 15 Jan 2024</p>
        </div>
      </div>
      <CUD />
    </div>
  );
};

export default AdminCard;
