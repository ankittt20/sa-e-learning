"use client";
import React, { useEffect, useState } from "react";
import { verifyTutorCourse, getCourses } from "@/actions/admin.actions";
import { getCoursesInterface } from "@/types/types";
import { format } from "date-fns";

type Props = {};

const CourseCard = (props: { course?: any }) => {
  const { course } = props;
  return (
    <div className="flex-between mt-3 rounded-lg bg-primary-100 p-3 drop-shadow">
      <div className="w-1/4">
        <p className="text-sm font-medium text-[#292638]">{course?.title}</p>
        <p className="text-xs text-[#7C7A84] truncate">{course?.description}</p>
      </div>
      <div>
        <p className="text-sm font-medium text-[#292638]">$ {course?.price}</p>
        <p className="text-xs text-[#7C7A84] capitalize">{course?.level}</p>
      </div>
      <div>
        <p className="text-sm font-medium text-[#292638]">Created On</p>
        <p className="text-xs text-[#7C7A84] capitalize">
          {format(new Date(course?.createdAt), "dd MMM yyyy")}
        </p>
      </div>
      <div className="w-[15%] text-right">
        <button
          onClick={async () => {
            await verifyTutorCourse(course?.id, !course.isVerified);
          }}
          className={`px-3 py-1 text-xs text-primary-100 tracking-wide rounded-full ${
            course.isVerified ? "bg-[#4CBB17]" : "bg-[#E90043]"
          }`}
        >
          {course.isVerified ? "Verified" : "Not Verified"}
        </button>
      </div>
    </div>
  );
};

const ManageCourses = (props: Props) => {
  const [courses, setCourses] = useState<getCoursesInterface[]>();

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getCourses();
      const coursesData =
        res.courses &&
        res.courses.map((course) => {
          return {
            id: course.id,
            title: course.name || "",
            description: course.description || undefined,
            price: course.price || undefined,
            image: course.image || undefined,
            createdAt: course.createdAt,
            level: course.level || undefined,
            requirements: course.requirements || undefined,
            objectives: course.objectives || undefined,
            isVerified: course.verified,
          };
        });
      setCourses(coursesData);
    };

    fetchCourses();
  }, []);
  return (
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">Manage Courses</h1>
      <div>
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default ManageCourses;
