import React from "react";
import AdminCard from "./AdminCard";
import { getAllAdmins } from "@/actions/super-admin";
import { adminInterface } from "@/types/types";

const ManageAdmin = async () => {
  const adminData = await getAllAdmins();

  if (!adminData.success) {
    return <div>Failed to fetch data</div>;
  }

  if (adminData.admins.length === 0) {
    return <div>No Admins Found</div>;
  }

  return (
    <div className="mt-4">
      {adminData?.admins.map((admin: adminInterface) => (
        <AdminCard key={admin.id} admin={admin} />
      ))}
    </div>
  );
};

export default ManageAdmin;
