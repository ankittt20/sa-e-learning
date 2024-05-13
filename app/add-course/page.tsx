import CourseDetail from "@/components/shared/add-course/CourseDetail";
import MobileNav from "@/components/shared/navbar/MobileNav";
import { PlusIcon } from "lucide-react";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="container flex justify-between p-7 sm:hidden">
        <h3 className="text-xl font-bold">
          <a href="/">SAelearning</a>
        </h3>
        <MobileNav />
      </div>
      <div>
        <h3 className="p-7 text-xl font-bold max-sm:hidden">
          <a href="/">SAelearning</a>
        </h3>
      </div>
      <div className="space-x-24 px-7 pb-10 sm:px-16">
        <div className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Course Details</h3>
            <p className="opacity-70">
              Share personal details and links about yourself
            </p>
            <div className="flex space-x-12">
              <p className="opacity-70">Your Course Style</p>
              <p className="text-accent-blue">Change Course Style</p>
            </div>
            <div className="flex w-fit cursor-pointer space-x-5 rounded-lg border border-[#000]/20 p-3 hover:shadow-sm">
              <PlusIcon className="size-10 text-accent-pink" />
              <div>
                <h6>Video Course</h6>
                <p className="text-sm opacity-70">
                  Visually show and display the lessons
                </p>
              </div>
            </div>
            <CourseDetail />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
