"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FamousCoursesCard from "./FamousCoursesCard";
import { getAllCategories } from "@/actions/generalFunctions.actions";
import { categoryTypes } from "@/types/types";
import { getPopularCourses } from "@/actions/course.action";

type Props = {};

const FamousCourses = (props: Props) => {
  // categories
  const [categories, setCategories] = useState<any>();
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  // popular courses
  const [popularCourses, setPopularCourses] = useState<any>();

  // get popular courses
  const fetchPopularCourses = useCallback(async () => {
    const res = await getPopularCourses(selectedCategory);
    if (!res.success) {
      return;
    }
    console.log(res.popularCourses);
    setPopularCourses(res.popularCourses);
  }, [selectedCategory]);

  // get categories
  const fetchCategories = async () => {
    const res = await getAllCategories();
    if (!res.success) {
      return;
    }
    setCategories(res.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchPopularCourses();
  }, [selectedCategory, fetchPopularCourses]);

  return (
    <>
      <div className="space-y-5 font-poppins">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Most Purchased Courses</h1>
          <div>
            <Select
              onValueChange={(e) => {
                setSelectedCategory(+e);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="bg-[#fff]">
                {categories?.map((category: categoryTypes) => (
                  <SelectItem key={category.id} value={category.id.toString()}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-5">
          {popularCourses?.map((course: any) => (
            <FamousCoursesCard
              key={course.id}
              title={course.name}
              price={course.price}
              image={course.image}
              level={course.level}
              category={course.category[0].category.name}
              tutor={course.tutor.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FamousCourses;
