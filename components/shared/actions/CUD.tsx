import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CUD = () => {
  return (
    <div className="flex items-center gap-3">
      <IoIosAddCircle className="size-6 text-accent-blue" />
      <FaEdit className="size-6 text-[#FFCD4D]" />
      <MdDelete className="size-6 text-[#FF6D59]" />
    </div>
  );
};

export default CUD;
