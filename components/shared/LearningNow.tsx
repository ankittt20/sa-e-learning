import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const LearningNow = (props: Props) => {
  return (
    <div className="grid grid-cols-10 bg-[#E0DAFD] w-full h-52 sm:h-96 rounded-[20px] py-9 px-6 sm:py-20 sm:px-14">
      <div className="col-span-6 space-y-5">
        <h1 className="text-lg sm:text-[40px]">Learning Now!</h1>
        <p className="text-[7px] sm:text-[16px]">
          By the same illusion which lifts the horizon of the sea to the level
          of the spectator. Lorem ipsum dolor sit amet consectetur. Auctor
          suspendisse tempus vulputate fames.{" "}
        </p>
        <div className="space-x-2 sm:space-x-10">
          <Button className="btn text-[8px] sm:text-lg font-bold w-16 sm:w-44 h-7">
            Get Started
          </Button>
          <Button className="text-[8px] sm:text-lg font-bold w-16 sm:w-44 h-7 bg-none text-accent-blue border-[1px] border-primary-100">
            Contact
          </Button>
        </div>
      </div>
      <div className="col-span-4">
        <Image
          className="sm:relative -top-56 -right-16"
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
