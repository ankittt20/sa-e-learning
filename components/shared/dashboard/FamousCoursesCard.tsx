import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaEllipsisV, FaRegBookmark } from "react-icons/fa";

type Props = {};

const FamousCoursesCard = (props: Props) => {
  return (
    <>
      <div className="rounded-lg border border-[#F2F2F2] bg-primary-100 p-6 flex space-x-5 items-center">
        <div>
          <Image
            src="/assets/images/most-purchased-course.png"
            alt="famous-courses"
            width={100}
            height={100}
          />
        </div>
        <div className="space-y-1 font-inter">
          <p className="text-xs text-[#888888]">UI Design</p>
          <h1 className="text-lg font-bold text-[#222222]">
            How to create pattern design with Figma
          </h1>
          <div className="flex">
            <Button className="rounded-lg bg-[#F3F1FC] text-xs text-accent-blue shadow-sm mr-5">
              Start 10:00 AM
            </Button>
            <Button className="rounded-lg bg-[#F3F1FC] text-xs text-accent-blue shadow-sm mr-5">
              Rate 4.8
            </Button>
            <Button className="rounded-lg bg-[#F3F1FC] text-xs text-accent-blue shadow-sm mr-5">
              Afonso Pinto
            </Button>
          </div>
        </div>
        <div className="flex space-x-3">
          <FaRegBookmark className="text-[#888888] cursor-pointer ml-56 text-lg" />
          <FaEllipsisV className="text-[#888888] cursor-pointer text-lg" />
        </div>
      </div>
    </>
  );
};

export default FamousCoursesCard;
