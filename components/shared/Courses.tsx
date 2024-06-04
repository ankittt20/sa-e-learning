"use client";
import React, { useEffect, useState } from "react";
import Filter from "@/components/shared/forms/filters/Filter";
import FilterInput from "@/components/shared/forms/inputs/FilterInput";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import SideFilter from "@/components/shared/SideFilter";
import CourseCardInfo from "@/components/shared/cards/CourseCardInfo";
import Pagination from "@/components/shared/Pagination";
import LanguagesCaraousel from "./LanguagesCaraousel";
import { coursesSortFilters } from "@/constants/filters";
import useCategories from "@/hooks/useFetchData";
import { getAllCourses, getCoursesByCategory } from "@/actions/course.action";

const Courses = () => {
  const [courses, setCourses] = useState<any>([]);
  const [courseError, setError] = useState("");
  const [courseLoading, setLoading] = useState(false);

  // fetch all courses
  const fetchCourses = async () => {
    setLoading(true);
    const res = await getAllCourses();
    if (!res.success) {
      setError(res.msg);
      setCourses([]);
    } else setCourses(res.courses ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // get categories from useCategories hook
  const { categories, loading, error } = useCategories();

  // map through categories and make a category filter list
  const categoriesFilterList = categories?.map((category: any) => ({
    name: category.name,
    value: category.id,
    id: category.id,
  }));

  // append all to the categories filter list
  categoriesFilterList?.unshift({ name: "All", value: "all", id: 0 });

  // handle sort by
  const handleSortBy = (value: string) => {
    let sortedCourses: any;

    if (value === "popular") {
      sortedCourses = courses.sort((a: any, b: any) => b.rating - a.rating);
      setCourses([...sortedCourses]);
    }
    if (value === "latest") {
      sortedCourses = courses.sort(
        (a: any, b: any) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setCourses([...sortedCourses]);
    }
    if (value === "price_asc") {
      sortedCourses = courses.sort((a: any, b: any) => a.price - b.price);
      setCourses([...sortedCourses]);
    }
    if (value === "price_desc") {
      sortedCourses = courses.sort((a: any, b: any) => b.price - a.price);
      setCourses([...sortedCourses]);
    }
  };

  // handle filter by category
  const handleFilterByCategory = async (value: string) => {
    const category = value === "all" ? 0 : +value;
    if (category === 0) {
      const fetchAllCourses = await getAllCourses();
      if (fetchAllCourses.success) {
        setCourses(fetchAllCourses.courses);
      } else {
        setError(fetchAllCourses.msg);
      }
    } else {
      const fetchCourseByCategory = await getCoursesByCategory(category);
      if (fetchCourseByCategory.success) {
        setCourses(fetchCourseByCategory.courses);
      } else {
        setError(fetchCourseByCategory.msg);
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

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
          <Filter
            label="Sort By"
            forType="sort"
            placeholder="Popular"
            onChangeHandler={handleSortBy}
            values={coursesSortFilters}
          />
          <Filter
            label="Categories"
            forType="sort"
            placeholder="All"
            values={categoriesFilterList}
            onChangeHandler={handleFilterByCategory}
          />
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
              {courseLoading && <div>Loading...</div>}
              {courseError && <div>Error: {courseError}</div>}
              {courses.length === 0 && <div>No courses found</div>}
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
