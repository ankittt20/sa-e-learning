import React from "react";
import Filter from "@/components/shared/forms/filters/Filter";
import FilterInput from "@/components/shared/forms/inputs/FilterInput";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import SideFilter from "@/components/shared/SideFilter";
import CourseCardInfo from "@/components/shared/cards/CourseCardInfo";
import Pagination from "@/components/shared/Pagination";
import LanguagesCaraousel from "./LanguagesCaraousel";

type Props = {
  courses: any;
};

const Courses = ({ courses }: Props) => {
  return (
    <div className="my-28">
      <div>
        <h3 className="h3-bold-extra text-center leading-9 sm:text-left">
          Browse Courses & More{" "}
          <span className="whitespace-nowrap text-accent-pink">
            “100 Products”
          </span>
        </h3>
        <div className="mt-11 flex flex-wrap items-end justify-between gap-6">
          <Filter label="Sort By" forType="sort" placeholder="Popular" />
          <Filter label="Categories" forType="sort" placeholder="All" />
          <FilterInput
            label="Search"
            forType="search"
            placeholder="Filter by Course"
          />
          <Button className="rounded-lg bg-accent-blue">
            <FaSearch size={17} color="#fff" />
          </Button>
        </div>
        <LanguagesCaraousel />
        <div className="my-28 flex gap-16">
          <SideFilter />
          <div>
            <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-3">
              {courses &&
                courses.map((course: any) => (
                  <CourseCardInfo key={course.id} course={course} />
                ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
