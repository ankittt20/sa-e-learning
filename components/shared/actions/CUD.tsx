import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CUD = () => {
  return (
    <div className="flex items-center gap-3">
      <IoIosAddCircle className="size-6 text-accent-blue cursor-pointer" />
      <FaEdit className="size-6 text-[#FFCD4D] cursor-pointer" />
      <MdDelete className="size-6 text-[#FF6D59] cursor-pointer" />
    </div>
  );
};

export default CUD;
