"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import StudentCard from "./StudentCard";
import { format } from "date-fns";
import { getStudents } from "@/actions/admin.actions";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const ManageStudents = (props: Props) => {
  const [students, setStudents] = useState<any>();

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await getStudents();
      setStudents(res.students);
    };
    fetchStudents();
  }, []);

  return (
    <div className="sm:w-1/2">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manage Students</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaSearch />
        </div>
      </div>
      <div className="max-h-60 pb-2 overflow-y-scroll no-scrollbar">
        {students ? (
          students.map((student: any) => {
            return (
              <StudentCard
                name={student?.name}
                key={student.id}
                joining={format(new Date(student?.createdAt), "dd MMM yyyy")}
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

export default ManageStudents;
