import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";

type Props = {};

const Courses = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">Courses</h1>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="">
            <span className="flex items-center space-x-2">
              <p className="text-sm text-[#888888]">Sort By</p>
              <FaChevronDown className="text-xs text-[#888888]" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Newest</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Oldest</DropdownMenuItem>
            <DropdownMenuItem>Coding</DropdownMenuItem>
            <DropdownMenuItem>Finance</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Courses;
