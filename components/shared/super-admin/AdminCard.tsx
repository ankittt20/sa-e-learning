import Image from "next/image";
import React from "react";
import CUD from "../actions/CUD";
import { adminInterface } from "@/types/types";

const AdminCard = ({ admin }: { admin: adminInterface }) => {
  return (
    <div className="flex-between mt-3 w-full gap-5 rounded-lg bg-primary-100 p-3 drop-shadow sm:w-[433px]">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/images/superadmin.png"
          alt="user"
          width={50}
          height={50}
          className="rounded"
        />
        <div>
          <p className="text-sm font-medium text-[#292638]">{admin.name}</p>
          <p className="text-[10px] text-[#7C7A84] sm:text-xs">
            Joined -{" "}
            {admin.createdAt
              ? new Date(admin.createdAt).getMonth() +
                "-" +
                new Date(admin.createdAt).getMonth()
              : "Jan 1, 2021"}
          </p>
        </div>
      </div>
      <CUD selectedItemId={0} />
    </div>
  );
};

export default AdminCard;
