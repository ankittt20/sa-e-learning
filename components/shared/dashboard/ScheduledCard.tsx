import React from "react";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

interface Props {
  ribbonColor: string;
}

const ScheduledCard = ({ ribbonColor }: Props) => {
  return (
    <div className="flex items-center justify-between rounded-[14px] border border-[rgba(0,0,0,0.1)] px-3 py-[10px]">
      <div className="flex gap-4">
        <div className={`h-[41px] w-[5px] rounded-full ${ribbonColor}`}></div>
        <div>
          <p className="font-semibold">Mentor online meet up</p>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-xs text-[rgba(0,0,0,0.4)]">10/05/24</span>
            <div className="size-[6px] rounded-full bg-[rgba(0,0,0,0.4)]"></div>
            <span className="text-xs text-[rgba(0,0,0,0.4)]">08:00-11:00</span>
          </div>
        </div>
      </div>
      <HiOutlineArrowTopRightOnSquare
        scale={2}
        style={{ fontWeight: "bold", fontSize: "24px" }}
      />
    </div>
  );
};

export default ScheduledCard;
