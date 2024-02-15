import { Input } from "@/components/ui/input";
import React from "react";
import Filter from "../forms/filters/Filter";
import CourseQuestionCard from "./CourseQuestionCard";

const FAQ = () => {
  return (
    <div>
      <Input
        placeholder="Search all course questions"
        className="border border-[#C0BABA]"
      />
      <div className="flex-between mt-4 flex-wrap gap-5">
        <Filter
          label="Filters:"
          placeholder="All lectures"
          forType="all lectures"
        />
        <Filter
          label="Sort by:"
          placeholder="Sort by recommended"
          forType="sort by"
        />
        <Filter
          label="Filter Questions:"
          placeholder="Filter questions"
          forType="filter questions"
        />
      </div>
      <div className="mt-6">
        <div className="flex gap-3">
          <h6 className="text-bold max-sm:text-lg max-sm:font-bold">
            All questions in this course
          </h6>
          <span className="text-bold text-[rgba(0,0,0,0.5)] max-sm:text-lg max-sm:font-bold">
            (21001)
          </span>
        </div>
        <div className="mt-4">
          <CourseQuestionCard />
          <CourseQuestionCard />
          <CourseQuestionCard />
          <CourseQuestionCard />
          <CourseQuestionCard />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
