import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {};

const Feedback = (props: Props) => {
  return (
    <div>
      <div className="flex items-center space-x-5">
        <h1 className="text-[15px] font-medium">Feedback</h1>
        <FaArrowRight className="text-xs font-semibold" />
      </div>
      <div className="border-1 border-[#EDEDED] rounded-lg">

      </div>
    </div>
  );
};

export default Feedback;
