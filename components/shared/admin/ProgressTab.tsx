import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CircularProgress from "./CircularProgress";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  name: string;
  progress: number;
  gradient: string;
};

const ProgressTab = ({ name, progress, gradient }: Props) => {
  return (
    <div className="flex justify-center items-center border-[1.5px] border-[#EDEDED] rounded-2xl p-5 space-x-5">
      <CircularProgress progress={progress} gradient={gradient} />
      <span className="text-left space-y-2">
        <p className="font-medium text-lg">{name}</p>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-lg border border-[#EDEDED] px-5 py-2">
              <span className="flex items-center space-x-2">
                <p className="text-sm text-[#888888]">Grade Wise</p>
                <FaChevronDown className="text-xs text-[#888888]" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Grade Wise</DropdownMenuItem>
              <DropdownMenuItem>Coding</DropdownMenuItem>
              <DropdownMenuItem>Finance</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </span>
    </div>
  );
};

export default ProgressTab;
