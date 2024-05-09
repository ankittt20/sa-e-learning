"use client";
import { getTutorCourses } from "@/actions/tutor.actions";
import CUD from "@/components/shared/actions/CUD";
import { getCoursesInterface } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

type Props = {};

const TutorPage = (props: Props) => {
  const [courses, setCourses] = useState<getCoursesInterface[]>();
  const router = useRouter();

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getTutorCourses();
      const coursesData =
        res.courses &&
        res.courses.map((course) => {
          return {
            id: course.id,
            title: course.name || "",
            description: course.description || undefined, // Change null to undefined
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

  const editCourse = (id: number) => {
    router.push(`/edit-course?course-id=${id}`);
  };

  return (
    <div>
      <h4>Manage Courses</h4>
      <div>
        {courses?.map((course) => (
          <div key={course.id}>
            <h4>{course.title}</h4>
            <p className="line-clamp-1">{course.description}</p>
            <p>{course.price}</p>
            <p>{course.level}</p>
            <p>{course.requirements}</p>
            <p>{course.objectives}</p>
            <p>{course.isVerified ? "Verified" : "Not Verified"}</p>
            <CUD handleEditClick={editCourse} selectedItemId={course.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorPage;
