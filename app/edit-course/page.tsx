"use client";
import AddLesson from "@/components/shared/add-course/AddLesson";
import AddModule from "@/components/shared/add-course/AddModule";
import EditCourseDetails from "@/components/shared/add-course/EditCourseDetails";
import ModuleLessons from "@/components/shared/add-course/ModuleLessons";
import MobileNav from "@/components/shared/navbar/MobileNav";
import { Suspense } from "react";
import React, { useState } from "react";

type Props = {};

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <style jsx>{`
        .spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: #1a73e8;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

const page = (props: Props) => {
  const [selectedModule, setSelectedModule] = useState(1);

  const setModule = (id: number) => {
    console.log(id);
    setSelectedModule(id);
  };

  return (
    <Suspense fallback={<LoadingSpinner />}>
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
      <div className="space-x-24 px-7 pb-10 sm:flex sm:px-16">
        <div className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Course Details</h3>
            <p className="opacity-70">
              Continue your course creation journey by adding more details
            </p>

            <EditCourseDetails />
          </div>
          <AddModule handleModuleSelect={setModule} />
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-semibold">Your Lesson Content</h3>
            <p className="text-xs font-medium opacity-50">
              This is what your learners are going to consume
            </p>
          </div>

          <div className="space-y-2">
            <ModuleLessons moduleId={selectedModule} />
          </div>

          <AddLesson moduleId={selectedModule} />
        </div>
      </div>
    </Suspense>
  );
};

export default page;
