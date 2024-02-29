import React from "react";
import { FaSearch } from "react-icons/fa";
import StudentCard from "./StudentCard";

type Props = {};

const ManageStudents = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manage Students</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaSearch />
        </div>
      </div>
      <div>
        <StudentCard name="Akshay Kumar" joining="Joined - 15 Jan 2024" />
        <StudentCard name="Prajakta" joining="Joined - 15 Jan 2024" />
        <StudentCard name="Harsh Gupta" joining="Joined - 15 Jan 2024" />
      </div>
    </div>
  );
};

export default ManageStudents;
