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

const MyCourses = (props: Props) => {
  return (
    <>
      <div className="font-poppins">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">My Course</h1>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="border py-2 px-5 border-[#F2F2F2] rounded-lg">
                <span className="flex items-center space-x-2">
                  <p className="text-sm text-[#888888]">Design</p>
                  <FaChevronDown className="text-xs text-[#888888]" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Design</DropdownMenuItem>
                <DropdownMenuItem>Coding</DropdownMenuItem>
                <DropdownMenuItem>Finance</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourses;
