import { Button } from "@/components/ui/button";
import React from "react";
import { FaBell, FaChevronDown, FaSearch } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-center py-14 justify-between">
      <h1 className="text-[32px] font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <input
          className="bg-primary-100 w-72 h-14 border border-[#DADADA] rounded-md px-3"
          type="text"
          placeholder="Find Your Course"
        />
        <Button className="bg-accent-blue w-14 h-14 rounded-md">
          <FaSearch className="h-5 w-5 text-primary-100" />
        </Button>
        <Button className="bg-primary-100 w-14 h-14 rounded-md">
          <FaBell className="h-8 w-8" />
        </Button>
        <div className="bg-primary-100 flex items-center h-14 rounded-md px-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-6">
              <div className="flex items-center space-x-3 p-1">
                <Image
                  src="/assets/icons/fahmi.svg"
                  alt="User"
                  width={28}
                  height={28}
                />
                <p>Sakshi Shrivastav</p>
              </div>
              <FaChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
