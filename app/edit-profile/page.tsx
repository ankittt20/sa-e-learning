import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import EditProfile from "@/components/shared/edit-profile/EditProfile";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="pb-8 sm:pb-16">
      <EditProfile session={session} />
    </div>
  );
};

export default page;
