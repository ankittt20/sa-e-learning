"use client";
import React, { useEffect, useState } from "react";
import TopicAndMore from "@/components/shared/TopicAndMore";
import CourseCards from "@/components/shared/cards/CourseCards";
import { getAllCourses } from "@/actions/course.action";

const PopularCourses = () => {
  const [courses, setCourses] = useState<any>();

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getAllCourses();
      setCourses(res.courses);
    };
    fetchCourses();
  }, []);

  console.log(courses);

  const popularCourses = courses
    ?.sort((a: any, b: any) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <div>
      <TopicAndMore link="/courses" heading="Most Popular Courses" />
      <div className="mt-16 flex flex-wrap items-center justify-center gap-9">
        {popularCourses?.map((course: any) => (
          <CourseCards key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
