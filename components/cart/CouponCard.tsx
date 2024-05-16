import React from "react";
import { FaXmark } from "react-icons/fa6";

const CouponCard = () => {
  return (
    <div className="flex items-center justify-between border border-dotted p-4">
      <h4>
        <span className="font-semibold">Free Course </span>
        is applied
      </h4>
      <FaXmark className="size-5 cursor-pointer" />
    </div>
  );
};

export default CouponCard;
