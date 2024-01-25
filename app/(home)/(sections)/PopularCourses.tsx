import React from "react";
import TopicAndMore from "@/components/shared/TopicAndMore";
import CourseCards from "@/components/shared/cards/CourseCards";

const PopularCourses = () => {
  return (
    <div>
      <TopicAndMore heading="Most Popular Courses" />
      <div className="mt-16 flex flex-wrap items-center justify-center gap-9">
        <CourseCards />
        <CourseCards />
        <CourseCards />
        <CourseCards />
        <CourseCards />
        <CourseCards />
        <CourseCards />
        <CourseCards />
      </div>
    </div>
  );
};

export default PopularCourses;
