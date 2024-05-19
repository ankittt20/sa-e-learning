"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import TutorCard from "./TutorCard";
import { getTutors } from "@/actions/admin.actions";
import { format } from "date-fns";

type Props = {};

const ManageTutor = (props: Props) => {
  const [tutors, setTutors] = useState<any>();

  useEffect(() => {
    const fetchTutors = async () => {
      const res = await getTutors();
      setTutors(res.tutors);
    };
    fetchTutors();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manage Tutors</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaSearch />
        </div>
      </div>
      <div>
        {tutors &&
          tutors.map((tutor: any) => {
            return (
              <TutorCard
                name={tutor?.name}
                key={tutor.id}
                joined={format(
                  new Date(tutor?.createdAt),
                  "dd MMM yyyy"
                )}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ManageTutor;
