import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const LearningNow = (props: Props) => {
  return (
    <div className="grid h-52 w-full grid-cols-10 rounded-[20px] bg-[#E0DAFD] px-6 py-9 sm:h-96 sm:px-14 sm:py-20">
      <div className="col-span-6 space-y-5">
        <h1 className="text-lg sm:text-[40px]">Learning Now!</h1>
        <p className="text-[7px] sm:text-[16px]">
          By the same illusion which lifts the horizon of the sea to the level
          of the spectator. Lorem ipsum dolor sit amet consectetur. Auctor
          suspendisse tempus vulputate fames.{" "}
        </p>
        <div className="space-x-2 sm:space-x-10">
          <Button className="btn h-7 w-16 text-[8px] font-bold sm:w-44 sm:text-lg">
            Get Started
          </Button>
          <Button className="h-7 w-16 border-[1px] border-primary-100 bg-none text-[8px] font-bold text-accent-blue sm:w-44 sm:text-lg">
            Contact
          </Button>
        </div>
      </div>
      <div className="col-span-4">
        <Image
          className="-right-16 -top-56 sm:relative"
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
