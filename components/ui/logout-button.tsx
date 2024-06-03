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
        className="rounded-md bg-accent-blue px-5 text-primary-100"
      >
        Sign Out
      </Button>
    </>
  );
};

export default LogoutButton;
