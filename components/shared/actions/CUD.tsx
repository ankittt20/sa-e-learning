import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

interface Props {
  handleAddClick?: () => void;
  handleEditClick?: (id: number) => void;
  handleDeleteClick?: () => void;
  selectedItemId: number;
  notVisible?: boolean;
}

const CUD = ({
  handleAddClick,
  handleEditClick,
  handleDeleteClick,
  selectedItemId,
  notVisible,
}: Props) => {
  return (
    <div className="flex items-center gap-3">
      <IoIosAddCircle
        className={`size-6 cursor-pointer text-accent-blue ${
          notVisible ? "hidden" : ""
        }`}
        onClick={handleAddClick}
      />
      <FaEdit
        className="size-6 cursor-pointer text-[#FFCD4D]"
        onClick={handleEditClick?.bind(null, selectedItemId)}
      />
      <MdDelete
        className="size-6 cursor-pointer text-[#FF6D59]"
        onClick={handleDeleteClick}
      />
    </div>
  );
};

export default CUD;
