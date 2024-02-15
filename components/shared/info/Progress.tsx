import { Progress } from "@/components/ui/progress";
import React from "react";

interface IProgressInfo {
  value: number;
  info: string;
}

const ProgressInfo = ({ value, info }: IProgressInfo) => {
  return (
    <div className="mt-6 sm:w-[461px]">
      <div className="flex-between">
        <p className="text-lg font-bold max-sm:text-sm">{info}</p>
        <span className="text-lg font-medium max-sm:text-sm">{`${value} %`}</span>
      </div>
      <Progress value={value} className="mt-3 h-3 bg-accent-secondary" />
    </div>
  );
};

export default ProgressInfo;
