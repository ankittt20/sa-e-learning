import LearningNow from "@/components/shared/LearningNow";
import Footer from "@/components/shared/footer/Footer";
import React from "react";
import Testimonial from "@/components/shared/testimonial/Testimonial";
import Courses from "@/components/shared/Courses";
import { getAllCourses } from "@/actions/course.action";

type Props = {};

const page = async (props: Props) => {
  const courses = await getAllCourses();

  return (
    <div className="">
      <div className="container space-y-28">
        <Courses courses={courses.courses} />
        <Testimonial />
        <LearningNow />
        <Footer />
      </div>
    </div>
  );
};

export default page;
