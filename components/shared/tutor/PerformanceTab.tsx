import React from "react";
import CircularProgress from "./CircularProgress";
import { FaChevronRight } from "react-icons/fa";

type Props = {
    name: string;
    date: string;
    progress: number;
    gradient: string;
};

const PerformanceTab = ({
    name,
    date,
    progress,
    gradient,
}: Props) => {
  return (
    <div className="flex justify-center items-center border-[1.5px] border-[#F2F2F2] px-5 rounded-xl space-x-6">
      <div className="w-16">
        <CircularProgress
          progress={progress}
          gradient={gradient}
        />
      </div>
      <div className="pr-1">
        <p className="text-md font-medium">{name}</p>
        <p className="text-[#888888] text-sm font-inter">{date}</p>
      </div>
      <FaChevronRight className="text-[#888888]" />
    </div>
  );
};

export default PerformanceTab;
