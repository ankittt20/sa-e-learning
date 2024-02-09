import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import ScheduledCard from "./ScheduledCard";

type Props = {};

const Scheduled = (props: Props) => {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-3">
        <h6 className="font-medium">Scheduled</h6>
        <FaArrowRightLong />
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <ScheduledCard ribbonColor="bg-[#BAF8BA]" />
        <ScheduledCard ribbonColor="bg-[#FFE3BF]" />
        <ScheduledCard ribbonColor="bg-[#FEC3BE]" />
        <div className="flex items-center justify-center gap-3 rounded-[15px] border border-dashed border-[rgba(0,0,0,0.3)] p-[14px]">
          <IoIosAddCircle
            style={{ fontWeight: "bold", fontSize: "20px" }}
            className="text-[#A69BE4]"
          />
          <p className="text-xs font-semibold">Add Schedule</p>
        </div>
      </div>
    </div>
  );
};

export default Scheduled;
