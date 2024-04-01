"use client";

import React from "react";
import { Button } from "./button";
import { signOut } from "next-auth/react";

type Props = {};

const LogoutButton = (props: Props) => {
  return (
    <>
      <Button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: "/",
          })
        }
        className="btn rounded-full px-5 py-3 shadow-sm hover:shadow-md max-sm:hidden text-lg font-semibold"
      >
        Sign Out
      </Button>
    </>
  );
};

export default LogoutButton;
