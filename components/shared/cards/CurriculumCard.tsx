import React from "react";
import { IoEye } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

interface CurriculumCardProps {
  title: string;
  duration: string;
  isViewable: boolean;
  count: number;
}

const CurriculumCard = ({
  title,
  duration,
  isViewable,
  count,
}: CurriculumCardProps) => {
  return (
    <div className="mb-8 flex justify-between rounded-lg bg-[#FEF1F0] p-4">
      <div className="flex items-center gap-5">
        <span>{count}.</span>
        <p className="line-clamp-1 text-[20px] text-[#33333]">{title}</p>
      </div>
      <div className="sm:pt-12">
        <div className="flex items-center justify-center gap-4">
          <span className="text-[rgba(51,51,51,0.5)] max-sm:text-xs">
            {duration}
          </span>
          {isViewable ? (
            <IoEye size={20} color="#F07867" />
          ) : (
            <FaLock size={20} color="#9B9B9B" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CurriculumCard;
