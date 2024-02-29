import React from "react";
import { FaSearch } from "react-icons/fa";
import TutorCard from "./TutorCard";

type Props = {};

const ManageTutor = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manage Tutors</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaSearch />
        </div>
      </div>
      <div>
        <TutorCard name="Akshay Kumar" qualification="MBA" />
        <TutorCard name="Prajakta" qualification="PhD" />
        <TutorCard name="Harsh Gupta" qualification="B.Tech, M.Tech" />
      </div>
    </div>
  );
};

export default ManageTutor;
