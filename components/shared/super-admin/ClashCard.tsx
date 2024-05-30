import React from "react";
import { FaRegBell } from "react-icons/fa";

interface Props {
  cardType: string;
}

const ClashCard = ({ cardType }: Props) => {
  const border = cardType === "clash" ? "border-[#FF8F80]" : "border-[#1285D7]";
  const circle = cardType === "clash" ? "bg-[#FF8F80]" : "bg-[#1285D7]";
  const text = cardType === "clash" ? "text-[#FF8F80]" : "text-[#1285D7]";
  return (
    <div className={`rounded-2xl border ${border} px-3 py-2 sm:w-[315px]`}>
      <div className="flex-between">
        <div>
          <h5>Introduction to C++</h5>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-[10px] text-[rgba(0,0,0,0.4)]">10/05/24</span>
            <div className={`size-[6px] rounded-full ${circle}`}></div>
            <span className="text-[10px] text-[rgba(0,0,0,0.4)]">
              08.00-11.00
            </span>
            <span className={`text-[10px] ${text}`}>Hidaytama </span>
          </div>
        </div>
        <div>
          <FaRegBell className={`size-6 ${text}`} />
        </div>
      </div>
    </div>
  );
};

export default ClashCard;
