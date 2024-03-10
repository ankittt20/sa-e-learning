import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const ClassCard = () => {
  return (
    <div>
      <div className="rounded border border-[rgba(125,109,216,0.2)] p-4 sm:w-[320px]">
        <div className="flex-between">
          <p className="text-[10px]">Date : 01/02/2024</p>
          <p className="text-[10px]">Time : 00:00</p>
        </div>
        <h6 className="mt-4">Introduction to C++ | Lesson 1</h6>
        <p className="mt-3 text-xs">
          Lorem ipsum dolor sit amet consectetur. Sagittis tellu lorem ipsum
          dolor.
        </p>
        <div className="mt-3 flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/user.png"
              width={28}
              height={28}
              alt="user"
              className="rounded-full"
            />
            <span className="text-sm font-medium">Hidaytama</span>
          </div>
          <div className="flex items-center gap-4">
            <Button className="rounded bg-[#5CA962] text-[10px] font-bold text-primary-100 sm:h-[20px] sm:w-[55px]">
              Approve
            </Button>
            <Button className="rounded  border border-[#E5443A] text-[10px] font-bold text-[#E5443A] sm:h-[20px] sm:w-[55px]">
              Reject
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
