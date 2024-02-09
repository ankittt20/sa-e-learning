import React from "react";
import CircularProgress from "./CircularProgress";

type Props = {};

const Progress = (props: Props) => {
  return (
    <>
      <div className="rounded-xl border border-[#EDEDED] p-5">
        <div>
          <CircularProgress
            progress={78}
            gradient="#FB923C"
            text1="You've attended"
            text2="out of 30 classes"
            highlight="20"
            highlightClass="text-[#FB923C]"
          />
        </div>
      </div>
      <div>
        <div className="mt-5 rounded-xl border border-[#EDEDED] p-5">
          <CircularProgress
            progress={22}
            gradient="#10B981"
            text1="You've done"
            text2="of 67 classes"
            highlight="12"
            highlightClass="text-[#10B981]"
          />
        </div>
      </div>
    </>
  );
};

export default Progress;
