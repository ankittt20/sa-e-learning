"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaBell, FaChevronDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { signOut } from "next-auth/react";

type Props = {
  title: string;
  user?: any;
};

const Header = ({ title, user }: Props) => {
  return (
    <header className="flex items-center justify-between sm:py-14">
      <h1 className="text-[32px] font-bold max-sm:hidden">{title}</h1>
      <div className="flex items-center space-x-4">
        <Button className="size-14 rounded-md bg-primary-100 max-sm:hidden">
          <FaBell className="size-8" />
        </Button>
        <div className="flex h-14 items-center rounded-md bg-primary-100 px-3 max-sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-6 outline-none">
              <div className="flex items-center space-x-3 p-1">
                <Image
                  src="/assets/icons/fahmi.svg"
                  alt="User"
                  width={28}
                  height={28}
                />
                <p>{user?.name}</p>
              </div>
              <FaChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-100">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  signOut({
                    redirect: true,
                    callbackUrl: "/",
                  })
                }
                className="cursor-pointer"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
