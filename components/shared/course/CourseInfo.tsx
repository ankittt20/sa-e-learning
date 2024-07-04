"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { getTotalCourseLessonCount } from "@/actions/course.action";
import { addCourseToCart } from "@/actions/user.actions";

interface CourseInfoProps {
  course: any;
}

const CourseInfo = ({ course }: CourseInfoProps) => {
  const [lessonCount, setLessonCount] = useState(0);

  const fetchTotalLessonCount = useCallback(async (courseId: number) => {
    try {
      const data = await getTotalCourseLessonCount(courseId);
      if (data.success) {
        setLessonCount(data.totalLessonCount);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchTotalLessonCount(course.id);
  }, [course.id, fetchTotalLessonCount]);

  const handleAddCourseToCart = async () => {
    try {
      const data = await addCourseToCart(+course.id);
      if (data.success) {
        alert("Course added to cart successfully");
      } else alert("Course is already in the cart");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#F3F1FC] p-8">
      <div className="relative">
        <Image
          src="/assets/images/course-preview.png"
          width={314}
          height={220}
          alt="course"
          className="rounded-xl sm:h-[220px] sm:w-[1014px]"
        />
        <div className="absolute right-10 top-1/2 mx-auto flex flex-col items-center justify-center">
          <FaPlayCircle
            height={63}
            width={63}
            color="#FFFFFF"
            className="size-[40px]"
          />
          <p className="text-nowrap text-center font-semibold text-primary-100">
            Preview this course
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-2xl font-bold">Course Info</h4>
        <div className="mt-8 rounded-lg bg-primary-100 p-5">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/assets/images/user.png"
              width={70}
              height={70}
              alt="user"
            />
            <div>
              <h6 className="text-[20px] font-semibold text-[#333333]">
                {course?.tutor?.name || "Instructor"}
              </h6>
              <p className="text-sm text-[rgba(51,51,51,0.5)]">
                {course?.tutor?.speciality || "No speciality available"}
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-4">
            <div className="flex items-center justify-between border-t border-[#EFDED5] pt-3">
              <h6 className="text-xs font-bold uppercase">
                Course Published On
              </h6>
              <span>{`${new Date(course?.createdAt).getDay()}/${new Date(
                course?.createdAt
              ).getMonth()}/${new Date(
                course?.createdAt
              ).getFullYear()}`}</span>
            </div>
            <div className="flex items-center justify-between border-t border-[#EFDED5] pt-3">
              <h6 className="text-xs font-bold uppercase">Duration</h6>
              <span>{course.duration || "3 Hours"}</span>
            </div>
            <div className="flex items-center justify-between border-t border-[#EFDED5] pt-3">
              <h6 className="text-xs font-bold uppercase">Lessons</h6>
              <span>{lessonCount}</span>
            </div>
            <div className="flex items-center justify-between border-t border-[#EFDED5] pt-3">
              <h6 className="text-xs font-bold uppercase">Levels</h6>
              <span className="capitalize">{course?.level}</span>
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-lg bg-primary-100 p-8">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold text-[#333333] sm:text-4xl">
              ${course?.price || 0}
            </p>
            <p className="text-sm text-[#B7B7B7] line-through sm:text-base">
              $50.99
            </p>
            <p className="text-sm font-semibold text-[#333333] sm:text-base">
              81%off
            </p>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <FaClock color="#7D6DD8" className="size-[16px]" />
            <p className="text-sm font-bold sm:text-base">
              <span className="text-accent-blue">1 day</span> left at this
              price!
            </p>
          </div>
        </div>
        <Button
          className="mt-6 w-full rounded-2xl bg-accent-blue py-6 text-primary-100"
          onClick={handleAddCourseToCart}
        >
          <p className="text-lg font-bold">Add to Cart</p>
        </Button>
        <div className="mt-6 flex items-center justify-between px-5">
          <p className="text-[10px] font-semibold underline underline-offset-2 sm:text-xs">
            Share
          </p>
          <p className="text-[10px] font-semibold underline underline-offset-2 sm:text-xs">
            Gift this course
          </p>
          <p className="text-[10px] font-semibold underline underline-offset-2 sm:text-xs">
            Apply Coupon
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
