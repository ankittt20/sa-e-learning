import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CUD = () => {
  return (
    <div className="flex items-center gap-3">
      <IoIosAddCircle className="size-3 text-accent-blue sm:size-6" />
      <FaEdit className="size-3 text-[#FFCD4D] sm:size-6" />
      <MdDelete className="size-3 text-[#FF6D59] sm:size-6" />
    </div>
  );
};

export default CUD;
