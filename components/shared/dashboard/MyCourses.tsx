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
import Image from "next/image";

type Props = {};

const MyCourses = (props: Props) => {
  return (
    <>
      <div className="font-poppins">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">My Course</h1>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-lg border border-[#F2F2F2] px-5 py-2">
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
        <div className="mt-5 flex flex-wrap gap-4">
          <div className="relative">
            <Image
              src="/assets/images/my-courses.png"
              height={187}
              width={189}
              className="rounded-lg"
              alt="my-course"
            />
            <div className="absolute bottom-9 left-5">
              <h6 className="text-[13px] text-[rgba(255,255,255,0.8)]">
                UI Design
              </h6>
              <h5 className="text-[15px] font-semibold text-primary-100">
                Wireframing
              </h5>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/my-courses.png"
              height={187}
              width={189}
              className="rounded-lg"
              alt="my-course"
            />
            <div className="absolute bottom-9 left-5">
              <h6 className="text-[13px] text-[rgba(255,255,255,0.8)]">
                UI Design
              </h6>
              <h5 className="text-[15px] font-semibold text-primary-100">
                Wireframing
              </h5>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/my-courses.png"
              height={187}
              width={189}
              className="rounded-lg"
              alt="my-course"
            />
            <div className="absolute bottom-9 left-5">
              <h6 className="text-[13px] text-[rgba(255,255,255,0.8)]">
                UI Design
              </h6>
              <h5 className="text-[15px] font-semibold text-primary-100">
                Wireframing
              </h5>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/my-courses.png"
              height={187}
              width={189}
              className="rounded-lg"
              alt="my-course"
            />
            <div className="absolute bottom-9 left-5">
              <h6 className="text-[13px] text-[rgba(255,255,255,0.8)]">
                UI Design
              </h6>
              <h5 className="text-[15px] font-semibold text-primary-100">
                Wireframing
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourses;
