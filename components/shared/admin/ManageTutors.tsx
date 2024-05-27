"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import TutorCard from "./TutorCard";
import { getTutors } from "@/actions/admin.actions";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

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
    <div className="sm:w-1/2">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manage Tutors</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaSearch />
        </div>
      </div>
      <div className="max-h-60 pb-2 overflow-y-scroll no-scrollbar">
        {tutors ? (
          tutors.map((tutor: any) => {
            return (
              <TutorCard
                name={tutor?.name}
                key={tutor.id}
                joined={format(new Date(tutor?.createdAt), "dd MMM yyyy")}
              />
            );
          })
        ) : (
          <div className="mt-4 space-y-2">
            <Skeleton className="w-full h-12 rounded-md bg-dark-100/5" />
            <Skeleton className="w-full h-12 rounded-md bg-dark-100/5" />
            <Skeleton className="w-full h-12 rounded-md bg-dark-100/5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageTutor;
