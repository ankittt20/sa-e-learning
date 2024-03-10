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

type Props = {
  showSearch?: boolean;
  heading: string;
};

const Header = ({ showSearch, heading }: Props) => {
  const flexValue = showSearch
    ? "items-center justify-between"
    : "items-center justify-between";
  return (
    <header className={`flex ${flexValue} py-14`}>
      <h1 className="text-[32px] font-bold max-sm:hidden">{heading}</h1>
      <div className="flex items-center space-x-4">
        {showSearch && (
          <>
            <input
              className="h-14 w-60 rounded-md border border-[#DADADA] bg-primary-100 px-3 sm:w-72"
              type="text"
              placeholder="Find Your Course"
            />
            <Button className="size-14 rounded-md bg-accent-blue">
              <FaSearch className="size-5 text-primary-100" />
            </Button>
          </>
        )}

        <Button className="size-14 rounded-md bg-primary-100 max-sm:hidden">
          <FaBell className="size-8" />
        </Button>
        <div className="flex h-14 items-center rounded-md bg-primary-100 px-3 max-sm:hidden">
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
