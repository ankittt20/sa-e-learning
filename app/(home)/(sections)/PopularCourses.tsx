"use client";
import React, { useEffect, useState } from "react";
import TopicAndMore from "@/components/shared/TopicAndMore";
import CourseCards from "@/components/shared/cards/CourseCards";
import { getPopularCourses } from "@/actions/course.action";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const PopularCourses = () => {
  const [courses, setCourses] = useState<any>();

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getPopularCourses();
      setCourses(res.popularCourses);
    };
    fetchCourses();
  }, []);

  console.log(courses);

  const popularCourses = courses
    ?.sort((a: any, b: any) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <div className="pt-8 sm:pt-0 ">
      <div className="max-sm:hidden">
        <TopicAndMore link="/courses" heading="Most Popular Courses" />
      </div>
      <div className="flex justify-between text-sm font-semibold sm:hidden">
        <p>Most Popular Courses</p>
        <Link href="/courses" className="text-accent-blue">
          Browse More
          <FaArrowRight className="inline-block ml-2" />
        </Link>
      </div>
      <div className="mt-16 flex flex-wrap items-center justify-center gap-9">
        {popularCourses?.map((course: any) => (
          <CourseCards key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
