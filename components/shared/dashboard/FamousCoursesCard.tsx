import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaEllipsisV, FaRegBookmark } from "react-icons/fa";

type Props = {};

const FamousCoursesCard = (props: Props) => {
  return (
    <>
      <div className="relative flex items-center space-x-5 rounded-lg border border-[#F2F2F2] bg-primary-100 p-6 max-sm:w-[326px]">
        <Image
          src="/assets/images/most-purchased-course.png"
          alt="famous-courses"
          width={123}
          height={132}
          className=" rounded-t-lg"
        />
        <div className="space-y-1 font-inter">
          <div className="flex items-center justify-between">
            <p className="text-nowrap text-xs text-[#888888]">UI Design</p>
            <div className="flex gap-2 sm:hidden">
              <FaRegBookmark className="cursor-pointer text-lg text-[#888888]" />
              <FaEllipsisV className="cursor-pointer text-lg text-[#888888]" />
            </div>
          </div>
          <h1 className="!mt-6 text-sm font-bold text-[#222222] sm:text-lg">
            How to create pattern design with Figma
          </h1>
          <div className="!mt-4 flex flex-wrap gap-3">
            <Button className="rounded-lg bg-[#F3F1FC] text-[10px] text-accent-blue shadow-sm sm:text-xs">
              Start 10:00 AM
            </Button>
            <Button className="rounded-lg bg-[#F3F1FC] text-[10px] text-accent-blue shadow-sm sm:text-xs">
              Rate 4.8
            </Button>
            <Button className="rounded-lg bg-[#F3F1FC] text-[10px] text-accent-blue shadow-sm sm:text-xs">
              Afonso Pinto
            </Button>
          </div>
        </div>
        <div className="hidden gap-2 sm:flex">
          <FaRegBookmark className="ml-56 cursor-pointer text-lg text-[#888888]" />
          <FaEllipsisV className="cursor-pointer text-lg text-[#888888]" />
        </div>
      </div>
    </>
  );
};

export default FamousCoursesCard;
