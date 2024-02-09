import React from "react";
import { PiMonitorPlay } from "react-icons/pi";

interface Props {
  heading: string;
  number: number;
  bg1: string;
  bg2: string;
}

const DashboardInfo = ({ heading, number, bg1, bg2 }: Props) => {
  return (
    <div
      className={`${bg1} flex flex-col items-center justify-center rounded-[9px] p-3`}
    >
      <PiMonitorPlay width={18} height={18} />
      <p className="mt-2 text-center text-xs font-semibold">{heading}</p>
      <div className={`mt-4 max-w-full rounded-[6px] ${bg2} px-6 py-1`}>
        <p className="font-semibold">{number}</p>
      </div>
    </div>
  );
};

export default DashboardInfo;
