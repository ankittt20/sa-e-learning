import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const LearningNow = (props: Props) => {
  return (
    <div className="relative flex h-52 w-full grid-cols-10 justify-between gap-8 rounded-[20px] bg-[#E0DAFD] px-6 py-9 drop-shadow-2xl sm:h-96 sm:px-14 sm:py-20">
      <div className="max-w-[65%] space-y-5 sm:max-w-[56%]">
        <h1 className="text-lg sm:text-[40px]">Learning Now!</h1>
        <p className="text-[7px] sm:text-[16px]">
          By the same illusion which lifts the horizon of the sea to the level
          of the spectator. Lorem ipsum dolor sit amet consectetur. Auctor
          suspendisse tempus vulputate fames.{" "}
        </p>
        <div className="w-full space-x-2 sm:space-x-10">
          <Button className="btn rounded-lg px-3 py-[2px] text-[8px] font-bold max-sm:h-[30px] sm:w-44 sm:px-5 sm:py-8 sm:text-lg">
            Get Started
          </Button>
          <Button className="border border-primary-100 bg-none p-1 px-4 py-[2px] text-[8px] font-bold text-accent-blue max-sm:h-[30px] sm:w-44 sm:px-5 sm:py-8 sm:text-lg">
            Contact
          </Button>
        </div>
      </div>
      <div className="">
        <Image
          className="absolute -right-1 -top-2 max-sm:h-[244px] max-sm:w-[116px] sm:right-5 sm:top-[-120px]"
          src="/assets/images/learning-now.svg"
          alt="Learning Now"
          width={389}
          height={518}
        />
      </div>
    </div>
  );
};

export default LearningNow;
